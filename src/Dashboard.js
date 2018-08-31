export default class Dashboard {
  constructor() {}

  render(context, camera, planets, pressingKeys) {
    const v = (Math.hypot(camera.vx, camera.vy) * 10).toFixed();
    const fuel = Math.round(camera.fuel);

    [["velocity", v, 200], ["fuel", fuel, 100]].forEach(
      ([name, value, denominator], index) => {
        const margin = 55;
        context.fillStyle = "#fff";
        context.strokeStyle = "#000";

        context.font = "20px Courier New";
        context.fillText(name, 20, 30 + margin * index);
        context.fillText(value, 20, 51 + margin * index);

        context.lineWidth = 1;
        context.strokeStyle = "#fff";
        context.fillStyle = "#fff";
        const ratio = Math.min(1, value / denominator);
        context.fillRect(
          65,
          40 + margin * index,
          100 * ratio,
          10
        );
        context.beginPath();
        context.rect(65, 40 + margin * index, 100, 10);
        context.stroke();
        context.closePath();
      }
    );
  }
}
