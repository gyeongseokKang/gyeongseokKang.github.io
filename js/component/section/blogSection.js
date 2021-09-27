class ComponentBlogSection extends HTMLElement {
  constructor() {
    // 클래스 초기화. 속성이나 하위 노드는 접근할 수는 없다.
    super();
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
          <section class="container pt mt fade-class" id="blog">
        <h2 class="section-header fonsiz-xxxl fonwei-en-xxl letsp-sm text-upper color-basic">Blog</h2>
        <div class="section-desc fonsiz-sm color-basic-opac letsp-sm ws-xs mt-2 mb-4">
          글을 쓰는 것을 즐깁니다. 공부한 것을 나누며, 취미를 기록하고 또 학습합니다.
          <li>Tistory에는 코딩테스트부터 책에 대한 후기</li>
          <li>Velog에는 딥한 내용의 개발글을 쓰려고 하고 있습니다.</li>
        </div>
        <div class="card shadow">
          <div class="card-body" style="display: flex; flex-wrap: wrap">
            <iframe
              src="https://all-dev-kang.tistory.com/category/%EA%B0%9C%EB%B0%9C"
              width="100%"
              height="400px"
            ></iframe>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("component-blog-section", ComponentBlogSection);
