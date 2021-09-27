class ComponentCertificateSection extends HTMLElement {
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
          <section class="container pt mt fade-class" id="certificate">
        <h2 class="section-header fonsiz-xxxl fonwei-en-xxl letsp-sm text-upper color-basic">Certificate</h2>
        <div class="section-desc fonsiz-sm color-basic-opac letsp-sm ws-xs mt-2 mb-4">
          자격증이 실력의 척도가 될 수는 없습니다. 하지만 관심과 꾸준함에 대한 척도는 될 수 있다고 생각합니다.
        </div>
        <div class="card shadow">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover align-middle">
                <thead>
                  <tr class="fonsiz-sm fonwei-kr-md letsp-sm color-basic-opac text-center vertmid">
                    <th>자격명</th>
                    <th>취득 이유</th>
                    <th>활용도</th>
                    <th>자격증</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th class="table-title" scope="col">정보처리기사(산업기사)</th>
                    <td>
                      <div>
                        대학교 생활의 마무리의 의미로 취득하였습니다. 개발자에게 있어 정보처리기사는 큰 업무적은 이점은
                        없습니다. <br />
                        하지만 컴퓨터공학 전반을 아우르는 기초적인 지식을 얻을 수 있는 시험이었습니다.
                      </div>
                    </td>
                    <td class="fonsiz-md letsp-sm fonwei-kr-md text-center color-basic-opac">
                      <div class="star-icon text-center">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                      </div>
                    </td>
                    <td class="text-center">
                      <span class="text-muted" data-bs-toggle="modal" data-bs-target="#certificateModel_1">
                        <i class="bi bi-file-earmark-slides"></i>
                      </span>
                      <!-- Modal 시작 -->
                      <div
                        class="modal"
                        id="certificateModel_1"
                        tabindex="-1"
                        aria-labelledby="certificateModel_1Label"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="certificateModel_1Label">자격증</h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <img
                                src="assets/img/certificate/InformationProcessingEngineer.png"
                                class="modal-img"
                                alt="정보처리기사 자격증"
                                style="width: 80%; height: 80%"
                              />
                              <img
                                src="assets/img/certificate/InformationProcessingIndustryEngineer.png"
                                class="modal-img"
                                alt="정보처리기사산업기사 자격증"
                                style="width: 80%; height: 80%"
                              />
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Modal 끝 -->
                    </td>
                  </tr>
                  <tr>
                    <th class="table-title" scope="col">정보기기운용기능사</th>
                    <td>
                      <div>
                        군대에서 네트워크운용병으로 근무하며 네트워크기기를 다뤄보았습니다. 하지만 다들 기초적인 기능만
                        다룰줄 알아
                        <br />
                        개인적으로 업무 효율을 증진하기 위해 취득하였습니다.
                      </div>
                    </td>
                    <td class="fonsiz-md letsp-sm fonwei-kr-md text-center color-basic-opac">
                      <div class="star-icon text-center">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                      </div>
                    </td>
                    <td class="text-center">
                      <span class="text-muted" data-bs-toggle="modal" data-bs-target="#certificateModel_2">
                        <i class="bi bi-file-earmark-slides"></i>
                      </span>
                      <!-- Modal 시작 -->
                      <div
                        class="modal"
                        id="certificateModel_2"
                        tabindex="-1"
                        aria-labelledby="certificateModel_2Label"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="certificateModel_2Label">자격증</h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <img
                                src="assets/img/certificate/InformationEquipmentManagementTechnician.png"
                                class="modal-img"
                                alt="정보기기운용기능사 자격증"
                                style="width: 80%; height: 80%"
                              />
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Modal 끝 -->
                    </td>
                  </tr>
                  <tr>
                    <th class="table-title" scope="col">ADSP , SQLD</th>
                    <td>
                      <div>
                        [SQLD] : 회사에서 업무를 배정받아 SQL를 실무에서 처음 써보았습니다. 그떄 배운 지식을 바탕으로
                        자격증을 취득해보았습니다.
                        <br />
                        [ADSP] : 데이터 분석 관련된 정보를 얻기위해 취득하였습니다. 깊은 수준은 아니지만 전반적인 지식을
                        배우는데 아주 좋았습니다.
                      </div>
                    </td>
                    <td class="fonsiz-md letsp-sm fonwei-kr-md text-center color-basic-opac">
                      <div class="star-icon text-center">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star"></i>
                      </div>
                    </td>
                    <td class="text-center">
                      <span class="text-muted" data-bs-toggle="modal" data-bs-target="#certificateModel_3">
                        <i class="bi bi-file-earmark-slides"></i>
                      </span>
                      <!-- Modal 시작 -->
                      <div
                        class="modal"
                        id="certificateModel_3"
                        tabindex="-1"
                        aria-labelledby="certificateModel_3Label"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="certificateModel_3Label">자격증</h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <img
                                src="assets/img/certificate/ADSP.png"
                                class="modal-img"
                                alt="ADSP 자격증"
                                style="width: 80%; height: 80%"
                              />
                              <img
                                src="assets/img/certificate/SQLD.png"
                                class="modal-img"
                                alt="SQLD 자격증"
                                style="width: 80%; height: 80%"
                              />
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Modal 끝 -->
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define("component-certificate-section", ComponentCertificateSection);
