<template>
  <div class="blockly-div" ref="blockly-div" />
</template>

<script>
import Blockly from "blockly";
import merge from "lodash.merge";
import { UnlispToolbox, UnlispTheme } from "../blockly-unlisp";

let BlocklyComponent = {
  name: "BlocklyComponent",
  props: ["options", "scheme"],

  data() {
    return {
      workspace: null,
      defaultOptions: {
        // 格子的样式
        grid: {
          spacing: 25, // 格子间距
          length: 3, // 十字形的大小
          colour: "#ccc", // 十字形颜色
          snap: true, // 是否吸附
        },
        // 对操作空间进行缩放
        zoom: {
          controls: true, // 是否开启缩放
          wheel: true, // 鼠标滚轮，设置为true以允许鼠标滚轮缩放
          startScale: 1.0, // 初始放大系数，默认为1
          maxScale: 2, // 最大放大系数，默认为3
          minScale: 0.5, // 最小的缩小系数，默认为0.3
          scaleSpeed: 1.2, // 缩放速率，默认为1.2
        },
        toolbox: UnlispToolbox,
        theme: UnlispTheme,
        renderer: "telesphorus",
      },
    };
  },

  watch: {
    scheme(value) {
      this.deserialize(value);
    },
  },

  mounted() {
    const options = merge(this.defaultOptions, this.options);
    this.workspace = Blockly.inject(this.$refs["blockly-div"], options);
    Blockly.BlockSvg.START_HAT = true;
    const filterId = this._injectCustomFilter();
    if (filterId) {
      this.workspace.options.embossFilterId = filterId;
    }

    this.workspace.addChangeListener(this.onChange);

    if (this.scheme) {
      this.deserialize(this.scheme);
    }
  },

  beforeDestroy() {
    this.workspace.removeChangeListener(this.onChange);
  },

  methods: {
    onChange(event) {
      this.$emit("change", event);
    },

    resize() {
      Blockly.svgResize(this.workspace);
    },

    getBlockly() {
      return Blockly;
    },

    getCode() {
      return Blockly.JavaScript.workspaceToCode(this.workspace);
    },

    getPrimitives() {
      return Blockly.JavaScript.getPrimitives();
    },

    serialize() {
      const xml = Blockly.Xml.workspaceToDom(this.workspace);
      return Blockly.Xml.domToText(xml);
    },

    deserialize(value) {
      const xml = Blockly.Xml.textToDom(value);
      Blockly.Xml.domToWorkspace(xml, this.workspace);
    },

    _injectCustomFilter() {
      const defs = document.getElementsByTagName("defs")[0];
      if (defs) {
        const rnd = String(Math.random()).substring(2);
        const customFilter = Blockly.utils.dom.createSvgElement(
          "filter",
          { id: "customFilter" + rnd },
          defs
        );
        Blockly.utils.dom.createSvgElement(
          "feMorphology",
          { in: "SourceAlpha", operator: "erode", radius: 1, result: "erode1" },
          customFilter
        );
        Blockly.utils.dom.createSvgElement(
          "feFlood",
          { "flood-color": "#fff", "flood-opacity": "0.4", result: "flood1" },
          customFilter
        );
        Blockly.utils.dom.createSvgElement(
          "feComposite",
          {
            in: "flood1",
            in2: "erode1",
            operator: "in",
            result: "specOut",
          },
          customFilter
        );
        const feMerge = Blockly.utils.dom.createSvgElement(
          "feMerge",
          {},
          customFilter
        );
        Blockly.utils.dom.createSvgElement(
          "feMergeNode",
          { in: "SourceGraphic" },
          feMerge
        );
        Blockly.utils.dom.createSvgElement(
          "feMergeNode",
          { in: "specOut" },
          feMerge
        );
        return customFilter.id;
      }
      return null;
    },
  },
};

export default BlocklyComponent;
</script>

<style scoped>
.blockly-div {
  height: 100%;
  width: 100%;
  text-align: left;
}
</style>

<style>
.blocklyMinimalBody {
  background: unset !important;
  padding: 2px !important;
}

.blocklyToolboxDiv {
  background-color: #eaecf0;
}

.blocklyFlyoutBackground {
  fill: #eaecf0;
}

.blocklyIconShape {
  fill: #4263a5;
}

.blocklyCommentTextarea {
  background-color: #fcf1d8;
  border-radius: 3px;
}

.blocklyFlyoutButton {
  fill: #8da1b9;
}

.blocklyFlyoutButton:hover {
  fill: #a2b7d0;
}

.blocklySelected > .blocklyPath {
  stroke: rgb(90, 90, 90);
  stroke-width: 2px;
  stroke-dasharray: 3;
  animation: dash 120s linear;
}

.blocklyHighlightedConnectionPath {
  stroke: rgb(90, 90, 90);
  stroke-width: 3px;
  stroke-dasharray: 3;
  animation: dash 70s linear;
}

@keyframes dash {
  to {
    stroke-dashoffset: 1000;
  }
}
</style>