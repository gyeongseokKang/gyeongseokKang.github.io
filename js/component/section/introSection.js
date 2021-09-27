class ComponentIntroSection extends HTMLElement {
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
      <section class="container pt mt fade-class" id="intro">
        <h2 class="section-header fonsiz-xxxl fonwei-en-xxl letsp-sm text-upper color-basic">intro</h2>
        <div style="display: flex; justify-content: space-evenly; flex-wrap: wrap">
          <div class="section-desc fonsiz-ori color-basic-opac letsp-sm ws-xs mt-2 mb-4">
            안녕하세요.<span class="fonwei-en-xl letsp-md text-emphasis">&nbsp강경석</span>입니다.
            <br />
            친구들과 함께 창업한 것을 시작으로, 바쁘게 살고있는 3년차 개발자입니다.
            <br />
            다양한 기술과 서비스로 새로운 서비스를 만드는 것을 좋아하며
            <br />
            그럼에도 깊게 공부하는 걸 추구하는 개발자이기도 합니다.
            <br />
            <span class="fonwei-en-xl letsp-md text-emphasis wavy">읽기 쉬운 코드를 쓰는 개발자</span>,&nbsp
            <span class="fonwei-en-xl letsp-md text-emphasis wavy">사랑받는 서비스를 만들고 싶은 개발자</span>가
            <br />
            되고 싶어 오늘도 공부하고 있습니다.
          </div>
          <div class="logo-circle">
            <div class="logo-round"></div>
            <div class="logo-text">
              <p>KANG GYEONG SEOK - FrontEnd Developer</p>
            </div>
          </div>
        </div>
      </section>
      `;
  }
}

customElements.define("component-intro-section", ComponentIntroSection);
