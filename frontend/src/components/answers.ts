import {UrlManager} from "../utils/url-manager";
import {Auth} from "../services/auth";
import {CustomHttp} from "../services/custom-http";
import config from "../../config/config";
import {QueryParamsType} from "../types/query-params.type";
import {UserInfoType} from "../types/user-info.type";
import {DefaultResponseType} from "../types/default-response.type";
import {QuizAnswerType, QuizQuestionType, QuizTypeAnswers} from "../types/quiz.type";

export class Answers {
    private routeParams: QueryParamsType;

    constructor() {
        this.routeParams = UrlManager.getQueryParams();
        this.init();
    }

    private async init(): Promise<void> {
        const userInfo: UserInfoType | null = Auth.getUserInfo();
        const that: Answers = this;

        if (!userInfo) {
            location.href = '#/';
            return;
        }

        if (this.routeParams.id) {
            try {
                const result: DefaultResponseType | QuizTypeAnswers = await CustomHttp.request(config.host + '/tests/' + this.routeParams.id + '/result/details?userId=' + userInfo.userId);
                if (result) {
                    if ((result as DefaultResponseType).error !== undefined) {
                        throw new Error((result as DefaultResponseType).message);
                    }

                    const answersTestName: HTMLElement | null = document.getElementById('answers-test-name');
                    if (answersTestName) {
                        answersTestName.innerText = (result as QuizTypeAnswers).test.name;
                    }

                    const answersPersonName: HTMLElement | null = document.getElementById('answers-person-name');
                    if (answersPersonName) {
                        answersPersonName.innerText = userInfo.fullName;
                    }

                    const answersPersonEmail: HTMLElement | null = document.getElementById('answers-person-email');
                    if (answersPersonEmail && userInfo) {
                        answersPersonEmail.innerText = userInfo.email;
                    }

                    let q: number = 0;
                    (result as QuizTypeAnswers).test.questions.forEach((item: QuizQuestionType): void => {
                        const answersOptions: HTMLElement | null = document.getElementById('answers-options');
                        if (answersOptions) {
                            const answersOption: HTMLDivElement = document.createElement('div');
                            answersOption.className = 'answers-option';

                            const answersOptionTitle: HTMLDivElement = document.createElement('div');
                            answersOptionTitle.className = 'answers-option-title';
                            answersOptionTitle.innerHTML = '<span>Вопрос ' + (q + 1)
                                + ':</span> ' + item.question;

                            const answerList: HTMLDivElement = document.createElement('div');
                            answerList.className = 'answer-list';

                            let i: number = 0;
                            item.answers.forEach((answer: QuizAnswerType): void => {
                                const answerItem: HTMLDivElement = document.createElement('div');
                                answerItem.className = 'answer-item';
                                answerItem.innerHTML = '<input type="radio">' + answer.answer;
                                answerList.appendChild(answerItem);
                                answersOption.appendChild(answersOptionTitle);
                                answersOption.appendChild(answerList);
                                answersOptions.appendChild(answersOption);

                                if (answer.correct === true) {
                                    answerItem.classList.add('answer-right');
                                } else if (answer.correct === false) {
                                    answerItem.classList.add('answer-wrong');
                                }
                                i++;
                            });
                            q++;
                        }
                    });

                    const backToResult: HTMLElement | null = document.getElementById('back-result');
                    if (backToResult) {
                        backToResult.onclick = function (): void {
                            location.href = '#/result?id=' + that.routeParams.id;
                        }
                    }
                    return;
                }
            } catch (error) {
                console.log(error);
                location.href = '#/';
            }
        }
    }
}
