class ComponentNavBar extends HTMLElement {
  constructor() {
    // 클래스 초기화. 속성이나 하위 노드는 접근할 수는 없다.
    super();
  }

  static get observedAttributes() {
    // 모니터링 할 속성 이름
    return ["locale"];
  }

  connectedCallback() {
    // DOM에 추가되었다. 렌더링 등의 처리를 하자.
    this.render();
  }

  disconnectedCallback() {
    // DOM에서 제거되었다. 엘리먼트를 정리하는 일을 하자.
    this.stop();
  }

  render() {
    this.innerHTML = `
         <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid text-uppercase">
        <a class="navbar-brand" href="#">KANG GYEONG SEOK</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse sticky-fixed" id="navbarNav">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link click-alarm fancy-link" href="#intro">intro</a>
            </li>
            <li class="nav-item">
              <a class="nav-link click-alarm fancy-link" href="#project">Project</a>
            </li>
            <li class="nav-item">
              <a class="nav-link click-alarm fancy-link" href="#awards">Awards</a>
            </li>
            <li class="nav-item">
              <a class="nav-link click-alarm fancy-link" href="#stacks">Stacks</a>
            </li>
            <li class="nav-item">
              <a class="nav-link click-alarm fancy-link" href="#certificate">Certificate</a>
            </li>
            <li class="nav-item">
              <a class="nav-link click-alarm fancy-link" href="#blog">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link click-alarm fancy-link" href="#contact">Contact</a>
            </li>
          </ul>
          <form class="d-flex"></form>
        </div>
      </div>
    </nav>
      `;
  }
}

customElements.define("component-navbar", ComponentNavBar);
