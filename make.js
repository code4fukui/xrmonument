import { CSV } from "https://js.sabae.cc/CSV.js";

const data = await CSV.fetchJSON("./index.csv");
data.reverse();

for (const d of data) {
  d.scale ||= 1;
  d.x ||= 0;
  d.y ||= 1;
  d.z ||= -1;
  /*
  const html = `<!DOCTYPE html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" href="data:">
<title>${d.name}</title>
<script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
<script src="https://rawgit.com/fernandojsg/aframe-teleport-controls/master/dist/aframe-teleport-controls.min.js"></script>
<!--
  <script type="module" src="./drone-controls-mode2.js"></script>
-->
<script type="module" src="https://code4fukui.github.io/glb-viewer/mc-controls.js"></script>

</head>

<body>
<a-scene id="scene" background="color: #000000" renderer="colorManagement: true">
  <a-assets timeout="30000">
    <a-asset-item id="om" src="./${d.file}.glb"></a-asset-item>
  </a-assets>
  <a-entity gltf-model="#om" position="${d.x} ${d.y} ${d.z}" scale="${d.scale} ${d.scale} ${d.scale}" rotation="0 0 0"></a-entity>
  <a-entity light="type: ambient; color: #FFF"></a-entity>
    <!--<a-sphere id="sphere" color="#f22"></a-sphere>-->
  <a-entity id="cameraRig" position="0 1 0" rotation="0 0 0">
    <a-entity id="head" camera position="0 1.7 0" mc-controls look-controls x-drone-controls-mode2></a-entity>
    <a-entity oculus-touch-controls="hand:left" teleport-controls="button:trigger; collisionEntities:.collidable; cameraRig:#cameraRig; teleportOrigin:#head;"></a-entity>
    <a-entity oculus-touch-controls="hand:right" teleport-controls="button:trigger; collisionEntities:.collidable; cameraRig:#cameraRig; teleportOrigin:#head;"></a-entity>
    <!--
    <a-entity id="leftHand" hand-tracking-controls="hand: left;"></a-entity>
    <a-entity id="rightHand" hand-tracking-controls="hand: right;"></a-entity>
    -->
    </a-entity>
</a-scene>
  
</body>
</html>`;
*/
  const html = `<!DOCTYPE html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" href="data:">
<script type="module">
import * as eg from "https://js.sabae.cc/egvr.js";

eg.model("./${d.file}.glb", ${d.x}, ${d.y}, ${d.z}, 0, ${d.scale});
</script>`;
  await Deno.writeTextFile(`${d.file}.html`, html);
}

const d = data[0];
const htmlindex = `<!DOCTYPE html><html lang="ja"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" href="data:">
<title>${d.category_ja} - ${d.category}</title>
<style>
.icon {
  float: left;
  width: 8em;
  margin: -1em .8em 1em .3em;
}
li {
  clear: both;
  margin: 0 0 .8em 0;
  padding: 0;
  list-style: none;
}
ul {
  margin: 0;
  padding: 0;
}
hr {
  clear: both;
  margin-top: 2em;
}
</style>
</head><body>
<h1>${d.category_ja} - ${d.category}</h1>
<ul>
${data.map(i => `<li><a rel=ar href="${i.file}.usdz"><img class=icon src=articon.webp></a>${d.date} <a href="${i.file}.html">${i.name} APP</a> / <a href="${i.file}.usdz">USDZ</a> / <a href="${i.file}.glb">GLB</a> - <a href=${i.url}>${i.site}</a></li>`).join("\n")}
</ul>

<hr>
DATA: CC BY <a href=https://github.com/code4fukui/xrmonument>Code for FUKUI</a><br>
Icon: the <a href=articon.webp>articon</a> created by <a href=https://openai.com/gpt-4>GPT-4</a><br>
`;
await Deno.writeTextFile("index.html", htmlindex);
