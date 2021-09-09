<template>
  <div class="wrapper">
    <div class="img-container">
      <img src="" alt="" />
    </div>
    <div class="tickets-block">
      <div class="tickets-block__sidebar">
          
        <!-- filter #1 -->
        <div class="tickets-block__sidebar_transfer-number">
          <h3>Количество пересадок</h3>
          <div class="loop">
            <div
              class="tickets-block__sidebar_transfer-number_check-wrapper"
              v-for="(item, index) in transferNumber"
              :key="index"
            >
              <input :id="index" type="checkbox" />
              <label :for="index">
                <span></span>
                {{ item }}
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="tickets-block__result-info">

        <!-- filter #2 -->
        <div class="tickets-block__result-info_radio-filter">
          <div class="options-box">
            <input type="radio" name="radio-filter" id="the-cheapest" checked />
            <label for="the-cheapest">
              <span>Самый дешевый</span>
            </label>
            <input type="radio" name="radio-filter" id="the-fastest" />
            <label for="the-fastest">
              <span>Самый быстрый</span>
            </label>
            <div class="options-box-roller"></div>
          </div>
        </div>

        <!-- blocks with tickets -->
        <div
          class="tickets-block__result-info_tickets-item"
          v-for="(ticket, index) in tickets.slice(0, 5)"
          :key="index"
        >
          <div class="top-info">
            <div class="price">{{ ticket.price }} Р</div>
            <div class="logo"></div>
          </div>
          <div class="bottom-info">

            <div class="tickets-item_data" v-for="(segment, index) in ticket.segments" :key="index">
              <div class="airports">
                <div class="airports-name title">{{ segment.origin }} - {{ segment.destination }}</div>
                <div class="time desc">10.10 - 00.50</div>
              </div>
              <div class="in-route">
                <div class="title">В пути</div>
                <div class="duration desc">21ч 15м</div>
              </div>
              <div class="transfers">
                <div class="num-transfers title">{{ segment.stops.length }} пересадки</div>
                <div class="airports-name desc">
                  <span v-for="(airport, index) in segment.stops" :key="index">{{ airport }}, </span>
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
const baseURI = "https://front-test.beta.aviasales.ru/";

export default {
  name: "app",
  data() {
    return {
      searchId: String,
      tickets: Array,
      transferNumber: [
        'Все',
        'Без пересадок',
        '1 пересадка',
        '2 пересадки',
        '3 пересадки'
      ]
    };
  },
  async mounted() {
    await this.$axios
      .get(`${baseURI}search`)
      .then((response) => (this.searchId = response.data.searchId))
      .catch((error) => console.log(error));
    await this.$axios
      .get(`${baseURI}tickets?searchId=${this.searchId}`)
      .then((response) => (this.tickets = response.data.tickets))
      .catch((error) => console.log(error));
    
  },
  methods: {
    getTickets() {},
  },
};
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
  letter-spacing: 0.0625rem;
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
  line-height: 1.5rem;
}
img {
  max-width: 100%;
  height: auto;
}
html {
  background: #f3f7fa;
  font-size: 16px;
  font-family: Inter, Tahoma, sans-serif;
}

// @font-face {
//     font-family: 'Inter';
//     src: url('Inter-Regular.woff2') format('woff2'),
//         url('Inter-Regular.woff') format('woff');
//     font-weight: normal;
//     font-style: normal;
// }

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
    &_transfer-number {
      @include whiteBlock;
      padding-right: 0;
      padding-left: 0;
      h3 {
        @include uppercaseText;
        padding: .3rem .75rem;
      }

      /* Checking number transfer */
      &_check-wrapper {
        &:hover,
        &:active {
          background: #f3f7fa;
        }
        input {
          display: none;
        }
        label {
          cursor: pointer;
          position: relative;
          display: flex;
          padding: 0.3rem 0.75rem;
          font-size: 0.75rem;
          align-items: center;
          color: $mainColor;
          transition: color 250ms cubic-bezier(0.4, 0, 0.23, 1);
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
            animation: shrink-bounce 200ms cubic-bezier(0.4, 0, 0.23, 1);
            &::before {
              content: "";
              border-right: 3px solid transparent;
              border-bottom: 3px solid transparent;
              transform: translate3d(0, -0.0625rem, 0) rotate(45deg);
              animation: checkbox-check 125ms 250ms
                cubic-bezier(0.4, 0, 0.23, 1) forwards;
            }
          }
        }
      }
      @keyframes shrink-bounce {
        0% {
          transform: scale(1);
        }
        33% {
          transform: scale(0.85);
        }
        100% {
          transform: scale(1);
        }
      }
      @keyframes checkbox-check {
        0% {
          width: 0;
          height: 0;
          border-color: $baseColor;
          transform: translate3d(0, 0, 0) rotate(45deg);
        }
        33% {
          width: 0.2rem;
          height: 0;
          transform: translate3d(0, 0, 0) rotate(45deg);
        }
        100% {
          width: 0.2rem;
          height: 0.5rem;
          border-color: $baseColor;
          transform: translate3d(0, -0.0625rem, 0) rotate(45deg);
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
        border: 0.0625rem solid rgba($baseColor, 0.2);
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

        input:checked + label {
          span {
            color: #ffffff;
          }
        }

        #the-cheapest:checked {
          & ~ .options-box {
            &-roller {
              transform: translateX(-50%);
            }
          }
        }

        #the-fastest:checked {
          & ~ .options-box {
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
      margin-bottom: 1rem;
      .top-info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
        .price {
          font-size: 1.5rem;
          color: $baseColor;
        }
        .logo {
          img {
            max-width: 100px;
          }
        }
      }
      .bottom-info {
        .tickets-item_data {
          display: grid;
          align-items: center;
          grid-template-columns: repeat(3, 1fr);
          margin-bottom: 0.5rem;
          .title {
            text-transform: uppercase;
            font-size: 0.75rem;
            color: #a0b0b9;
            font-weight: 600;
            line-height: 1.5rem;
            letter-spacing: 0.05rem;
          }
          .desc {
            color: $mainColor;
            font-size: 0.875rem;
            line-height: 1.5rem;
            font-weight: 600;
          }
          .airports-name {
            text-transform: uppercase;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .tickets-block {
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas: ". sidebar sidebar sidebar ." "result result result result result";

    &__sidebar {
      margin-bottom: 2rem;
    }
    &__result-info {
      grid-area: result;
    }
  }
}
</style>