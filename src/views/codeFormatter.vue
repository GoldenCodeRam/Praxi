<template>
  <h1>Code Formatter</h1>
  <div class="codeInput">
    <textarea
      class="codeInput"
      wrap="off"
      spellcheck="false"
      id="codeInput"
    ></textarea>
  </div>
  <canvas class="codeOutput" id="canvas"></canvas>
</template>

<script lang="ts">
function enableTab(elementId: string) {
  const element = document.getElementById(elementId) as HTMLTextAreaElement;
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;
  const canvasContext = canvas.getContext('2d');
  if (element !== null) {
    element.onkeydown = (event) => {
      if (event.keyCode === 9) {
        const val = element.value;
        const start = element.selectionStart;
        const end = element.selectionEnd;

        element.value = `${val.substring(0, start)}\u00A0\u00A0\u00A0\u00A0${val.substring(end)}`;
        element.selectionStart = start + 4;
        element.selectionEnd = start + 4;
        return false;
      }
      return true;
    };
  }
  if (canvasContext !== null) {
    console.log(canvas.width);
    canvasContext.font = '10 PT Mono';
    canvasContext.fillText('testing', 10, 10);
  }
}
export default {
  mounted() {
    enableTab('codeInput');
  },
};
</script>

<style lang="scss">
.codeInput {
  display: flex;
  width: 90%;
  margin: auto;
  padding: 1rem;

  background: $white0;
  border-radius: 25px;

  textarea.codeInput {
    width: 45rem;
    height: 35rem;
    resize: none;
    overflow: auto;

    font-family: 'PT Mono';
    font-size: 10pt;
    border: none;
    outline: none;
    padding: none;
  }
  textarea.codeInput::-webkit-scrollbar {
    height: 10px;
    width: 10px;
  }
  textarea.codeInput::-webkit-scrollbar-thumb {
    background: $darkBlue1;
    border-radius: 5px;
  }
  textarea.codeInput::-webkit-scrollbar-track {
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    background: $gray0;
    border-radius: 5px;
  }
}

.codeOutput {
  background: $gray0;
  border-radius: 25px;
}
</style>
