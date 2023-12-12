
import React, { useState } from 'react'
import "./App.css"
const App = () => {

    const popup = document.querySelector("#installment");
    const btn = document.querySelector(".installment__btn");
    const btnCloser = document.querySelector(".installment__closer");

    btn.addEventListener("click", function () {
        openModal();
    });

    btnCloser.addEventListener("click", function () {
        closePopup();
    });

    function openModal() {
        // open = !open;
        if (open) {
            popup.classList.add("open");
        } else {
            popup.classList.add("open");
        }
    }

    function closePopup() {
        popup.classList.remove("open");
    }
    return (
        <>
            <div>
                <div id="installment" className="installment__calc open">
                    <div className="installment__overlay" data-closer></div>
                    <div className="installment__wrapper">
                        <div className="installment__content">
                            <div className="installment__header">
                                <div className="installment__title">Рассрочка</div>
                                <button data-closer className="installment__closer">
                                    <svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.43444 7.53906L17 16.1785L15.6511 17.5391L7.08557 8.89958L8.43444 7.53906Z"
                                            fill="#272727" />
                                        <path d="M15.5656 7.53906L7 16.1785L8.34887 17.5391L16.9144 8.89958L15.5656 7.53906Z"
                                            fill="#272727" />
                                    </svg>
                                </button>
                            </div>

                            <div className="installment__body">
                                <div className="installment__product">
                                    <img src="https://openshop.uz/public/storage/uploads/products/thumbnail/202303/NlzoTYMfcPjHJ01H5b4dB8M4jUF8EoiZwVdNZzgG.jpg" className="installment__product-img" alt="logo" />

                                    <div className="installment__product-name">Xiaomi Redmi 9A 2/32GB ( Global Version )Green</div>
                                </div>

                                <div className="installment__information">
                                    <div className="installment__information-title">Важная информация!!!</div>
                                    <p className="installment__information-text red">Уважаемый клиент! Перед тем как заказать товар
                                        просим позвонить и уточнить наличия товара у
                                        колл центра (+998 71 200 66 60)</p>
                                    <p className="installment__information-text orange">Сумма рассрочки рассчитывается исходя из вашей
                                        платежеспособности.</p>
                                </div>
                            </div>
                            <div className="installment__plan">
                                <form className="installment__plan-group">
                                    <div className="installment__plan-choise">
                                        <input type="radio" id="6_months" name="installment_plan" checked />
                                        <label htmlFor="6_months">6 месяцев</label>
                                    </div>
                                    <div className="installment__plan-choise">
                                        <input type="radio" id="12_months" name="installment_plan" />
                                        <label htmlFor="12_months">12 месяцев</label>
                                    </div>
                                </form>

                                <div className="installment__price">1 330 000 сум в месяц</div>

                                <div className="installment__list">
                                    <div className="installment__list-item">
                                        <div className="list__item-left">
                                            <span>Страховка (1.5%)</span>
                                        </div>
                                        <div className="list__item-space"></div>
                                        <div className="list__item-line"></div>
                                        <div className="list__item-right">
                                            <span>438 021 сум</span>
                                        </div>
                                    </div>

                                    <div className="installment__list-item">
                                        <div className="list__item-left">
                                            <span>Рассрочка (17%)</span>
                                        </div>
                                        <div className="list__item-space"></div>
                                        <div className="list__item-line"></div>
                                        <div className="list__item-right">
                                            <span>6 438 021 сум</span>
                                        </div>
                                    </div>


                                    <div className="installment__total-price">
                                        <div>Итого</div>
                                        <div>29 654 421 сум</div>
                                    </div>
                                </div>
                            </div>

                            <form>
                                <div className="installment__form">
                                    <div className="installment__form-item">
                                        <label htmlFor="phoneNumber">Телефон</label>

                                        <input id="phoneNumber" type="text" />

                                    </div>

                                    <div className="installment__form-item">
                                        <label htmlFor="otp">Код из SMS</label>

                                        <input id="otp" type="text" />
                                    </div>

                                    <p className="installment__form-time">Вы можете получить новый СМС-код через <strong>00:45</strong>
                                    </p>

                                    <button className="installment__form-btn" type="button">Отправить SMS</button>


                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}
export default App;
