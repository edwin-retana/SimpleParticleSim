class Particle {
  /*
	 * constructor
	 * Creates particle with given position.
	 * Default mass is 1.0 kg.
	 * Velocity and Acceleration vectors are both (0,0).
	 * Assigns default color of "blue" and radius of 10.
	 * @param {number} pX - starting position x-coordinate.
	 * @param {number} pY - starting position y-coordinate.
	 */
  constructor(pX, pY, mass, num) {
	  this.posX = pX;
		this.posY = pY;
		this.mass = mass;

    this.num = num;

		this.color = "blue";
		this.radius = 10;

		this.velX = 0.0;
		this.velY = 0.0;
		this.accX = 0.0;
		this.accY = 0.0;
	}

	/*
	 * respawn
	 * Launch particle at given position.
	 * Velocity and Acceleration vectors are both (0,0).
	 * @param {number} pX - starting position x-coordinate.
	 * @param {number} pY - starting position y-coordinate.
	 */
	respawn(pX, pY) {
	  this.posX = pX;
		this.posY = pY;
	}

  restartSpeed() {
    this.velX = 0.0;
    this.velY = 0.0;
    this.accX = 0.0;
    this.accY = 0.0;
  }

  flipSpeedX() {
    this.velX = -1*this.velX;
    this.accX = -1*this.accX;
  }

  flipSpeedY() {
    this.velY = -1*this.velY;
    this.accY = -1*this.accY;
  }

	/*
	 * setMass
	 * @param {number} m - mass of particle in kilograms.
	 */
	setMass(m) {
    this.mass = m;
	}

	/*
	 * setColor
	 * Sets draw color of this circular particle.
	 * @param {string} color - an HTML color name string or hex value.
	 */
	setColor(color) {
    this.color = color;
	}

	/*
	 * setRadius
	 * Sets radius of this circular particle.
	 * @param {number} r - radius given > 0.
	 */
	setRadius(r) {
    this.radius = r;
	}

	/*
	 * setAcceleration
	 * Set current acceleration applied to this particle.
	 * @param {number} aX - acceleration x-component.
	 * @param {number} aY - acceleration y-component.
   */
	setAcceleration(aX, aY) {
    this.accX = aX;
    this.accY = aY;
	}

  /*
	 * update
	 * Increments position by instantaneous velocity and
	 * increments velocity by instantaneous accelration.
	 * @param {number} deltaTimeSec - elapsed frame time in seconds.
	 */
	update(deltaTimeSec) {
	  // (1) Increment position by current velocity vector.
	  // separate statement for posX and posY
    this.posX += this.velX*deltaTimeSec;
    this.posY += this.velY*deltaTimeSec;
		// (2) Increment velocity vector by instantaneous acceleration vector.
		//                seconds x pixels/second/second
    this.velX += this.accX*deltaTimeSec;
    this.velY += this.accY*deltaTimeSec;
	}


	/*
	 * paint
	 * Draws a circle at particle position filled with color
   * and radius as from setColor and setRadius.
	 * @param {CanvasContext} ctx - Canvas 2D drawing context.
   */
	paint(ctx) {
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.posX, this.posY, this.radius, 0, 2*Math.PI);
    ctx.stroke();
    ctx.strokeText(String(this.num), this.posX, this.posY);
	}

}
