export default class Planet {
  constructor({ x, y, radius, gravity }) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.gravity = gravity;
  }
  render(context, camera) {
    const { x, y } = camera.transform(this);
    const radius = this.radius * camera.zoom;

    context.lineWidth = 0.3;
    context.strokeStyle = "#fff";
    context.beginPath();
    context.arc(x, y, radius * 2, 0, 2 * Math.PI);

    context.stroke();
    const grd = context.createRadialGradient(x, y, radius, x, y, radius * 1.8);
    grd.addColorStop(0, "rgba(100,100,100,1)");
    grd.addColorStop(1, "rgba(0,0,0,0)");
    context.fillStyle = grd;
    context.fill();

    context.fillStyle = "#fff";
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fill();
  }
}
