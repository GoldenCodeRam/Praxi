<template>
  <div class="card">
    <div class="cardContainer">
      <div class="helpButtonContainer">
        <button class="helpButton">
          ?
          <span class="tooltipHelp">
            {{cardHelp}}
          </span>
        </button>
      </div>
      <img class="cardIcon" v-bind:src="icon">
      <p class="cardTitle">
        {{cardTitle}}
      </p>
      <button class="cardButton" @click="$router.push(link)">
        {{buttonText}}
      </button>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  props: {
    icon: String,
    cardTitle: String,
    buttonText: String,
    buttonLink: String,
    cardHelp: String,
  },
  setup(props: any) {
    const link = props.buttonLink !== undefined ? props.buttonLink.toString() : '';
    return {
      link,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: grid;
  background-color: $white0;
  width: 20rem;
  margin: 1rem;
  border-radius: 25px;
  padding: 0.5rem;

  transition: all 0.25s;

  .cardContainer {
    border: 2px solid $gray0;
    border-radius: 20px;
    padding: 1.5rem;

    .helpButtonContainer {
      display: flex;
      justify-content: flex-end;

      button.helpButton {
        border-radius: 20px;
        background: $gray0;
        border: none;
        outline: none;
        padding: 0.25rem 0.5rem;

        font-family: 'PT Mono';
        font-weight: normal;
        font-size: 16pt;
        color: $white0;

        .tooltipHelp {
          width: 10rem;
          left: 203.5px;
          top: 75px;
          font-size: 10pt;
          padding: 0.5rem 0.25rem;
          background-color: $gray0;
          color: $white0;
          border-radius: 6px;
          position: absolute;
          z-index: 1;
          opacity: 0;
          box-shadow: 0px 0px 5px $gray0;
          pointer-events: none;

          transition: opacity 0.3s;
        }
        .tooltipHelp::after {
          content: "";
          position: absolute;
          bottom: 100%; /* At the bottom of the tooltip */
          left: 50%;
          margin-left: -5px;
          border-width: 5px;
          border-style: solid;
          border-color: transparent transparent $gray0 transparent;
        }
      }
      button.helpButton:hover .tooltipHelp {
        opacity: 1;
      }
    }
    img.cardIcon {
      height: 5rem;
    }
    .cardTitle {
      font-size: 18pt;
      font-weight: bold;
    }
    button.cardButton {
      border-radius: 30px;
      background: $darkBlue0;
      border: none;
      outline: none;
      padding: 0.5rem 1.5rem;

      font-family: 'PT Mono';
      font-weight: normal;
      font-size: 18pt;
      color: $white0;

      box-shadow: 0px 5px 0px $darkBlue1;
    }
    button.cardButton:active {
      box-shadow: none;
      transform: translateY(5px);
    }
  }
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0px 5px $gray0;
}
</style>
