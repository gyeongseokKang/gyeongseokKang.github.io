class ComponentAwardSection extends HTMLElement {
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
          <section class="container pt mt fade-class" id="awards">
        <h2 class="section-header fonsiz-xxxl fonwei-en-xxl letsp-sm text-upper color-basic">Awards</h2>
        <div class="section-desc fonsiz-sm color-basic-opac letsp-sm ws-xs mt-2 mb-4">
          갑작스럽게 만들고 싶었던 서비스를 검증하기 위해, 또는 주어진 일에 열심히 몰두하고 있을때 선물같은 느낌으로
          다가옵니다.
          <br />그래서 상을 받는 건 저어겐 언제나 즐겁습니다.
        </div>
        <div class="card shadow">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover align-middle">
                <thead>
                  <tr class="fonsiz-sm fonwei-kr-md letsp-sm color-basic-opac text-center vertmid">
                    <th>상장</th>
                    <th>세부 사항</th>
                    <th>수상</th>
                    <th>증빙자료</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th class="table-title" scope="col">
                      2021<br />
                      티맥스 표창장(우수사원) <br />
                    </th>
                    <td>
                      <div>[티맥스]시각화 플랫폼, 통계 플랫폼 관련 업무로 인한 수상</div>
                      <div>
                        기존의 업무 외에 갑작스런 고객사의 요청으로 새로운 통계 플랫폼을 개발해야했습니다. <br />통계
                        도메인 지식이 부족함에도 여러사람을 괴롭히고 저 자신을 괴롭힌 결과 좋은 플랫폼을 만들게
                        되었습니다.
                      </div>
                    </td>
                    <td class="fonsiz-md letsp-sm fonwei-kr-md text-center color-basic-opac">우수사원상<br /></td>
                    <td class="text-center">
                      <span class="text-muted" data-bs-toggle="modal" data-bs-target="#Award_2021_2">
                        <i class="bi bi-file-earmark-slides"></i>
                      </span>
                      <!-- Modal 시작 -->
                      <div
                        class="modal"
                        id="Award_2021_2"
                        tabindex="-1"
                        aria-labelledby="Award_2021_2Label"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="Award_2021_2Label">시상식 증빙 자료</h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <img
                                src="assets/img/award/tmaxAward2021.jpg"
                                class="modal-img"
                                alt=""
                                style="width: 80%; height: 80%"
                              />
                              <p class="modal-desc">
                                짧은 기간 안에 기존 업무(시각화 대시보드)외, 프로젝트(통계분석플랫폼)를 성공적으로
                                구현하여 수상하였습니다.
                              </p>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Modal 끝 -->
                    </td>
                  </tr>
                  <tr>
                    <th class="table-title" scope="col">
                      2021<br />
                      우리은행 온택트 공모전 <br />
                    </th>
                    <td>
                      <div>[Dr.폴리오] 금용공학 모델 + AI를 이용한 최적의 포트폴리오 생성, 추천 서비스</div>
                      <div>
                        코로나 시기에 많은 사람들이 주식에 관심을 가지게 되었습니다. 하지만 내 주식 포트폴리오를
                        확신하긴 어렵습니다. <br />
                        그래서 최신 금융모델에 AI를 합하여 포트폴리오를 생성해주고 조언해주는 서비스를 개발해보았습니다.
                      </div>
                    </td>
                    <td class="fonsiz-md letsp-sm fonwei-kr-md text-center color-basic-opac">우수상<br /></td>
                    <td class="text-center">
                      <span class="text-muted" data-bs-toggle="modal" data-bs-target="#Award_2021_1">
                        <i class="bi bi-file-earmark-slides"></i>
                      </span>
                      <!-- Modal 시작 -->
                      <div
                        class="modal"
                        id="Award_2021_1"
                        tabindex="-1"
                        aria-labelledby="Award_2021_1Label"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="Award_2021_1Label">시상식 증빙 자료</h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <img
                                src="assets/img/award/wooribangAward.jpeg"
                                class="modal-img"
                                alt=""
                                style="width: 80%; height: 80%"
                              />
                              <p class="modal-desc">
                                사이드 프로젝트 동기부여를 위해 기한을 정하고 공모전에 도전하였습니다.<br />
                                전체 70여개의 팀 중에 3등을 하였고, 프로젝트을 가치를 인정받고 개발, 고도화 중입니다
                              </p>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Modal 끝 -->
                    </td>
                  </tr>

                  <tr>
                    <th class="table-title" scope="col">
                      2019<br />
                      청년 스타트업 어워즈 <br />
                      경기도 대학생 융합 창업지원 공모전 <br />
                      흑석캠퍼스타운 창업경진대회 <br />
                      스마트시티즌 챌린지 <br />
                      서울과기대 창업아이디어 경진대회 <br />
                    </th>
                    <td>
                      <div>[카찹] 통합 모빌리티 서비스</div>
                      <div>
                        졸업 프로젝트를 진행하다가 창업으로 넘어가기 전에 사업 모델의 고도화 및 검증을 위해 여러 대회,
                        공모전에 참가하고 피드백을 받았습니다. <br />
                        생각보다 많은 응원과 격려를 받았으며 이때를 계기로 본격 창업의 길로 나아가게 되었습니다.
                      </div>
                    </td>
                    <td class="fonsiz-md letsp-sm fonwei-kr-md text-center color-basic-opac">
                      대상<br />
                      S등급(대상)<br />
                      대상<br />
                      촤우수상<br />
                      은상<br />
                    </td>
                    <td class="text-center">
                      <span class="text-muted" data-bs-toggle="modal" data-bs-target="#myAwardModal1">
                        <i class="bi bi-file-earmark-slides"></i>
                      </span>
                      <!-- Modal 시작 -->
                      <div
                        class="modal"
                        id="myAwardModal1"
                        tabindex="-1"
                        aria-labelledby="myAwardModal1Label"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="myAwardModal1Label">시상식 증빙 자료</h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <img
                                src="assets/img/award/startupAward.jpg"
                                class="modal-img"
                                alt=""
                                style="width: 80%; height: 80%"
                              />
                              <img
                                src="assets/img/award/gyeonggiAward.jpeg"
                                class="modal-img"
                                alt=""
                                style="width: 80%; height: 80%"
                              />
                              <img
                                src="assets/img/award/campusTownAward.jpg"
                                class="modal-img"
                                alt=""
                                style="width: 80%; height: 80%"
                              />
                              <img
                                src="assets/img/award/smartCitizenAward.jpeg"
                                class="modal-img"
                                alt=""
                                style="width: 80%; height: 80%"
                              />
                              <img
                                src="assets/img/award/STU_Award.jpg"
                                class="modal-img"
                                alt=""
                                style="width: 80%; height: 80%"
                              />
                              <p class="modal-desc">
                                프로젝트를 검증받기 위해 다양한 경진대회, 공모전에 참가하였고 총 9개의 상을
                                받았습니다.<br />
                                이후 팀원들과 창업을 하게 되었고, 해당 대회를 통해 맺게된 인연을 통해 초기 투자를 받을
                                수 있었습니다.
                              </p>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Modal 끝 -->
                    </td>
                  </tr>

                  <tr>
                    <th class="table-title" scope="col">한국통신학회 추계종합학술발표회</th>
                    <td>
                      <div>[UC-Lab] GAN모델과 DNN모델을 활용한 Anomaly Detection에 관한 연구</div>
                      <div>
                        학부연구생과 인턴을 진행하면서 Anomaly Detection에 대한 나름의 깊은 공부를 했습니다. <br />
                        시간이 지나면 사라질 지식이었는데 지도교수님께서 이왕이면 논문으로 남기라는 조언을 해주셨고
                        해봤습니다.
                      </div>
                    </td>
                    <td class="fonsiz-md letsp-sm fonwei-kr-md text-center color-basic-opac">우수논문상</td>
                    <td class="text-center">
                      <span class="text-muted" data-bs-toggle="modal" data-bs-target="#myAwardModal2">
                        <i class="bi bi-file-earmark-slides"></i>
                      </span>
                      <!-- Modal 시작 -->
                      <div
                        class="modal"
                        id="myAwardModal2"
                        tabindex="-1"
                        aria-labelledby="myAwardModal2Label"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="myAwardModal2Label">시상식 증빙 자료</h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <img
                                src="assets/img/award/poster.jpg"
                                class="modal-img"
                                alt=""
                                style="width: 80%; height: 80%"
                              />
                              <p class="modal-desc">
                                시큐레이어(보안솔루션기업)에서 인턴직을 수행하며 배웠던 경험을 <br />
                                학부연구생 활동을 통해 학술대회에 지원하였습니다. <br />
                                머신러닝(GAN)를 활용한 이상탐지(Anomaly Detection)에 대해 주제로 우수논문상을
                                수상하였습니다.
                              </p>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                              <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
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
            <div class="table-desc fonsiz-xs fonwei-kr-sm letsp-sm text-center color-basic-opac">
              대회 참여 및 수상 실적은 최근 순으로 정렬되어 있습니다
            </div>
          </div>
        </div>
      </section>
      `;
  }
}

customElements.define("component-award-section", ComponentAwardSection);
