<template>
  <div class="wrapper">
      <div class="img-container">
          <img src="" alt="">
      </div>
      <div class="tickets-block">
          <div class="tickets-block__sidebar">
              <div class="tickets-block__sidebar_number-transfer">
                  <h3>Количество пересадок</h3>
                  <div class="loop">
                    <div class="tickets-block__sidebar_number-transfer_check-wrapper v-for-here">
                        <input id='one' type='checkbox' />
                        <label for='one'>
                            <span></span>
                            Без пересадок
                        </label>
                    </div>
                    <div class="tickets-block__sidebar_number-transfer_check-wrapper">
                        <input id='two' type='checkbox' />
                        <label for='two'>
                            <span></span>
                            1 пересадка
                        </label>
                    </div>
                  </div>
              </div>
          </div>
          <div class="tickets-block__result-info">
              <div class="tickets-block__result-info_radio-filter">
                  <div class="options-box">
                    <input type="radio" name="radio-filter" id="the-cheapest" checked>
                    <label for="the-cheapest">
                        <span>Самый дешевый</span>
                    </label>
                    <input type="radio" name="radio-filter" id="the-fastest">
                    <label for="the-fastest">
                        <span>Самый быстрый</span>
                    </label>
                    <div class="options-box-roller"></div>
                </div>
              </div>
              <div class="tickets-block__result-info_tickets-item">
                  <div class="top-info">
                      <div class="price"></div>
                      <div class="logo"></div>
                  </div>
                  <div class="bottom-info">
                      <div class="tickets-item_data there">
                          <div class="airports">
                              <div class="airports-name title">MOW - HKT</div>
                              <div class="time">10.10 - 00.50</div>
                          </div>
                          <div class="in-route">
                              <div class="title">В пути</div>
                              <div class="duration">21ч 15м</div>
                          </div>
                          <div class="transfers">
                              <div class="num-transfers title">2 пересадки</div>
                              <div class="airports-name">hkg, jnb</div>
                          </div>
                      </div>
                      <div class="tickets-item_data back">
                        <div class="tickets-item_data there">
                          <div class="airports">
                              <div class="airports-name title">MOW - HKT</div>
                              <div class="time">10.10 - 00.50</div>
                          </div>
                          <div class="in-route">
                              <div class="title">В пути</div>
                              <div class="duration">21ч 15м</div>
                          </div>
                          <div class="transfers">
                              <div class="num-transfers title">2 пересадки</div>
                              <div class="airports-name">hkg, jnb</div>
                          </div>
                      </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            text: 'Hello World!'
        }
    }
}
</script>

<style lang="scss">

$radius: 5px;
$baseColor: #2196f3;
$bgColor: #ffffff;
$mainColor: #0c131d;

@mixin uppercaseText {
    font-size: 0.75rem;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: .0625rem;
}
@mixin whiteBlock {
    background: $bgColor;
    box-shadow: 0 -0.625rem 1.5rem rgba(#000000, 0.1);
    padding: 1rem 0.75rem;
    border-radius: $radius;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
img {
    max-width: 100%;
    height: auto;
}
html {
    background: #f3f7fa;
    font-size: 16px;
    font-family: Inter,Tahoma,sans-serif;
}

.wrapper {
    max-width: 960px;
    padding: 2rem;
    margin: 0 auto;
}

.img-container {
    max-width: 300px;
    margin: 0 auto;
}
.tickets-block {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    gap: 0 1.5rem;
    align-items: flex-start;
    grid-template-areas: "sidebar sidebar sidebar result result result result result result";

    &__sidebar {
        grid-area: sidebar;
        &_number-transfer {
            @include whiteBlock;
            padding-right: 0;
            padding-left: 0;
            h3 {
                @include uppercaseText;
                padding: .5rem 0.75rem;
            }
            
            /* Checking number transfer */
            &_check-wrapper {
                &:hover, &:active {
                    background: #f3f7fa;
                }
                input {
                    display: none;
                }
                label {
                    cursor: pointer;
                    position: relative;
                    display: flex;
                    padding: .5rem .75rem;
                    font-size: .75rem;
                    align-items: center;
                    color: $mainColor;
                    transition: color 250ms cubic-bezier(.4,.0,.23,1);
                    & > span {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-right: 1rem;
                        width: 1rem;
                        height: 1rem;
                        background: transparent;
                        border: 0.0625rem solid $baseColor;
                    }
                }
                input:checked + label {
                    & > span {
                        animation: shrink-bounce 200ms cubic-bezier(.4,.0,.23,1);
                        &::before {
                            content: "";
                            border-right: 3px solid transparent;
                            border-bottom: 3px solid transparent;
                            transform: translate3d(0,-0.0625rem,0) rotate(45deg);
                            animation: checkbox-check 125ms 250ms cubic-bezier(.4,.0,.23,1) forwards;
                        }
                    }
                }
            }
            @keyframes shrink-bounce{
            0%{
                transform: scale(1);
            }
            33%{    
                transform: scale(.85);
            }
            100%{
                transform: scale(1);    
            }
            }
            @keyframes checkbox-check{
                0%{
                    width: 0;
                    height: 0;
                    border-color: $baseColor;
                    transform: translate3d(0,0,0) rotate(45deg);
                }
                33%{
                    width: .2rem;
                    height: 0;
                    transform: translate3d(0,0,0) rotate(45deg);
                }
                100%{    
                    width: .2rem;
                    height: .5rem;    
                    border-color: $baseColor;
                    transform: translate3d(0,-0.0625rem,0) rotate(45deg);
                }
            }
            /* END Checking number transfer */        
        }
    }
    &__result-info {
        grid-area: result;

        /* Checking the cheapest or the fastest options */
        &_radio-filter {
            color: $mainColor;
            margin-bottom: 1.5rem;
            .options-box {
                overflow: hidden;
                border: 0.0625rem solid rgba($baseColor, .2);
                background: $bgColor;
                border-radius: $radius;
                display: flex;
                position: relative;
                height: 100%;
                width: 100%;
                z-index: 1;

                &-roller {
                    position: absolute;
                    top: 0;
                    right: 0;
                    height: 100%;
                    width: 100%;
                    background-color: $baseColor;
                    transition: all 0.5s ease-in-out;
                    transform: translateX(-50%);
                }

                input {
                    display: none;
                }

                label {
                    flex: 0 0 50%;
                    max-width: 50%;
                    text-align: center;
                    padding: 0.9375rem 0.3125rem;
                    margin: 0;
                    cursor: pointer;
                    z-index: 2;

                    span {
                        position: relative;
                        z-index: 2;
                        color: $mainColor;
                        transition: all 0.2s ease 0.2s;
                        @include uppercaseText;
                    }
                }

                input:checked+label {
                    span {
                        color: #ffffff;
                    }
                }

                #the-cheapest:checked {
                    &~.options-box {
                        &-roller {
                            transform: translateX(-50%);
                        }
                    }
                }

                #the-fastest:checked {
                    &~.options-box {
                        &-roller {
                            transform: translateX(50%);
                        }
                    }
                }
            }
        }

        /* END Checking the cheapest or the fastest variantes */

        &_tickets-item {
            @include whiteBlock;
        }
    }
}

@media screen and (max-width: 768px) {
    .tickets-block {
        grid-template-columns: repeat(5, 1fr);
        grid-template-areas: "... sidebar sidebar sidebar ... result result result result result";

        &__sidebar {
            grid-area: sidebar;
            &_number-transfer {
                @include whiteBlock;
                h3 {
                    @include uppercaseText;
                }
            }
        }
        &__result-info {
            grid-area: result;
        }
    }
}
</style>