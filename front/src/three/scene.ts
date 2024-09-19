import * as THREE from "three";

export default class Scene extends THREE.Scene {
  envMapBaseUrl = "/cubemaps/outdoor";

  constructor() {
    super();
  }

  async loadEnvMap() {
    const cubeTextureLoader = new THREE.CubeTextureLoader();
    const environmentMap = await cubeTextureLoader.loadAsync([
      `${this.envMapBaseUrl}/px.png`,
      `${this.envMapBaseUrl}/nx.png`,
      `${this.envMapBaseUrl}/py.png`,
      `${this.envMapBaseUrl}/ny.png`,
      `${this.envMapBaseUrl}/pz.png`,
      `${this.envMapBaseUrl}/nz.png`,
    ]);

    this.environment = environmentMap;
    this.environmentRotation.y = 5;
    this.environmentIntensity = 3;
  }
}
