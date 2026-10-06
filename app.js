const state = {
  role: "owner",
  lang: "ar",
  page: "home",
  selectedInspector: null,
  answers: {
    a: "ok",
    b: "fail",
    c: "na",
    d: "ok"
  },
  sensitiveAccess: ["owner"],
  escalationBasis: "calendar",
  escalationStart: "created"
};

const roles = {
  owner: {
    ar: "مالك النظام",
    en: "System Owner",
    nameAr: "سلطان",
    nameEn: "Sultan",
    email: "owner@demo.local",
    icon: "crown"
  },

  quality_admin: {
    ar: "إدارة قسم الجودة",
    en: "Quality Management",
    nameAr: "نورة",
    nameEn: "Noura",
    email: "quality@demo.local",
    icon: "badge-check"
  },

  quality_staff: {
    ar: "موظف قسم الجودة",
    en: "Quality Officer",
    nameAr: "سارة",
    nameEn: "Sarah",
    email: "officer@demo.local",
    icon: "clipboard-check"
  },

  project_manager: {
    ar: "مدير المشروع",
    en: "Project Manager",
    nameAr: "أحمد",
    nameEn: "Ahmed",
    email: "manager@demo.local",
    icon: "briefcase-business"
  },

  inspector: {
    ar: "مفتش الجودة",
    en: "Quality Inspector",
    nameAr: "خالد",
    nameEn: "Khaled",
    email: "inspector@demo.local",
    icon: "scan-search"
  },

  guard_supervisor: {
    ar: "مشرف حراس الأمن",
    en: "Guard Supervisor",
    nameAr: "فهد",
    nameEn: "Fahad",
    email: "supervisor@demo.local",
    icon: "users-round"
  },

  guard: {
    ar: "حارس الأمن",
    en: "Security Guard",
    nameAr: "محمد",
    nameEn: "Mohammed",
    email: "guard@demo.local",
    icon: "shield"
  }
};

const projects = [
  {
    id: "P-001",
    code: "WH-01",
    ar: "مشروع الواحة السكني",
    en: "Al Waha Residential",
    regionAr: "الرياض — شمال",
    regionEn: "Riyadh — North",
    employees: 120,
    score: 92,
    findings: 14,
    openActions: 3,
    complaints: 2,
    closeDays: 3.2,
    improvement: 8.4,
    contractDays: 42
  },

  {
    id: "P-002",
    code: "PG-07",
    ar: "مشروع بوابة النخيل",
    en: "Palm Gate Project",
    regionAr: "الرياض — شرق",
    regionEn: "Riyadh — East",
    employees: 75,
    score: 81,
    findings: 19,
    openActions: 6,
    complaints: 5,
    closeDays: 5.8,
    improvement: 2.1,
    contractDays: 17
  }
];

const inspectors = [
  {
    id: "INS-01",
    ar: "خالد السالم",
    en: "Khaled Al Salem",
    emp: "EMP-2201",
    visits: {
      "2026-10-08": ["10:00"]
    }
  },

  {
    id: "INS-02",
    ar: "ريم القحطاني",
    en: "Reem Al Qahtani",
    emp: "EMP-2207",
    visits: {
      "2026-10-08": ["13:00"]
    }
  },

  {
    id: "INS-03",
    ar: "سارة الحربي",
    en: "Sarah Al Harbi",
    emp: "EMP-2212",
    visits: {
      "2026-10-08": [
        "10:00",
        "15:00"
      ]
    }
  },

  {
    id: "INS-04",
    ar: "ماجد الدوسري",
    en: "Majed Al Dosari",
    emp: "EMP-2219",
    visits: {}
  }
];

const navConfig = {
  owner: [
    ["home", "house", "الرئيسية", "Home"],
    ["projects", "building-2", "المشاريع", "Projects"],
    ["permissions", "shield-check", "الصلاحيات", "Permissions"],
    ["sensitive", "lock-keyhole", "البلاغات الحساسة", "Sensitive Reports"],
    ["operations", "settings-2", "التشغيل والتسليم", "Operations"]
  ],

  quality_admin: [
    ["home", "house", "الرئيسية", "Home"],
    ["projects", "building-2", "المشاريع", "Projects"],
    ["schedule", "calendar-days", "الجدولة", "Scheduling"],
    ["review", "stamp", "المراجعات", "Reviews"],
    ["analytics", "chart-no-axes-combined", "التقارير والتحليلات", "Reports & Analytics"],
    ["forms", "blocks", "النماذج", "Forms"]
  ],

  quality_staff: [
    ["home", "house", "الرئيسية", "Home"],
    ["review", "stamp", "المراجعات", "Reviews"],
    ["actions", "circle-check-big", "الإجراءات", "Actions"],
    ["reports", "file-chart-column", "التقارير", "Reports"]
  ],

  project_manager: [
    ["home", "house", "الرئيسية", "Home"],
    ["project", "building-2", "مشروعي", "My Project"],
    ["actions", "circle-check-big", "الملاحظات والإجراءات", "Findings & Actions"],
    ["training", "graduation-cap", "طلبات التدريب", "Training"],
    ["reports", "file-chart-column", "التقارير", "Reports"]
  ],

  inspector: [
    ["home", "house", "الرئيسية", "Home"],
    ["my_visits", "calendar-check", "زياراتي", "My Visits"],
    ["inspection", "clipboard-check", "بدء التفتيش", "Start Inspection"],
    ["returned", "undo-2", "المعاد للاستكمال", "Returned"],
    ["my_reports", "file-text", "تقاريري", "My Reports"]
  ],

  guard_supervisor: [
    ["home", "house", "الرئيسية", "Home"],
    ["guards", "users-round", "الحراس", "Guards"],
    ["training", "graduation-cap", "طلبات التدريب", "Training Requests"]
  ],

  guard: [
    ["home", "house", "الرئيسية", "Home"],
    ["my_services", "user-round", "خدماتي", "My Services"],
    ["sensitive", "lock-keyhole", "بلاغ خاص", "Private Report"]
  ]
};

function t(ar, en) {
  return state.lang === "ar"
    ? ar
    : en;
}

function icon(name) {
  return `<i data-lucide="${name}"></i>`;
}

function badge(text, type = "neutral") {
  return `
    <span class="badge ${type}">
      ${text}
    </span>
  `;
}

function projectName(id) {
  const project = projects.find(
    item => item.id === id
  );

  if (!project) {
    return id;
  }

  return state.lang === "ar"
    ? project.ar
    : project.en;
}

function refreshIcons() {
  if (window.lucide) {
    lucide.createIcons();
  }
}

function animatePage() {
  if (!window.gsap) {
    return;
  }

  gsap.from(
    ".pageIntro",
    {
      opacity: 0,
      y: 18,
      duration: .45,
      ease: "power3.out"
    }
  );

  gsap.from(
    ".heroPanel, .section, .card",
    {
      opacity: 0,
      y: 20,
      duration: .55,
      stagger: .055,
      ease: "power3.out"
    }
  );
}

function toast(message) {
  const el =
    document.querySelector(
      "#toast"
    );

  el.textContent = message;

  el.classList.add("show");

  clearTimeout(
    window.toastTimer
  );

  window.toastTimer =
    setTimeout(
      () => {
        el.classList.remove(
          "show"
        );
      },
      2500
    );
}

function modal(html) {
  document.querySelector(
    "#modalBody"
  ).innerHTML = html;

  document.querySelector(
    "#modalLayer"
  ).classList.remove(
    "hidden"
  );

  document.body.classList.add(
    "modalOpen"
  );

  refreshIcons();

  if (window.gsap) {
    gsap.from(
      ".modal",
      {
        opacity: 0,
        y: 22,
        scale: .98,
        duration: .25
      }
    );
  }
}

function closeModal() {
  document.querySelector(
    "#modalLayer"
  ).classList.add(
    "hidden"
  );

  document.body.classList.remove(
    "modalOpen"
  );
}

function listItem(
  iconName,
  title,
  subtitle,
  end = ""
) {
  return `
    <div class="listItem">

      <div class="listIcon">
        ${icon(iconName)}
      </div>

      <div class="listText">

        <b>
          ${title}
        </b>

        <span>
          ${subtitle}
        </span>

      </div>

      <div class="listAction">
        ${end}
      </div>

    </div>
  `;
}

function taskCard(
  iconName,
  title,
  description,
  value,
  valueLabel,
  action,
  tone = ""
) {
  return `
    <article
      class="taskCard"
      onclick="${action}"
    >

      <div class="taskIcon ${tone}">
        ${icon(iconName)}
      </div>

      <h3>
        ${title}
      </h3>

      <p>
        ${description}
      </p>

      <div class="taskBottom">

        <div>
          <strong>
            ${value}
          </strong>

          <span>
            ${valueLabel}
          </span>
        </div>

        ${icon("arrow-up-left")}

      </div>

    </article>
  `;
}

function statBox(
  value,
  label,
  trend = ""
) {
  return `
    <div class="statBox">
      <strong>
        ${value}
      </strong>

      <span>
        ${label}
      </span>

      ${
        trend
          ? `
            <small>
              ${trend}
            </small>
          `
          : ""
      }
    </div>
  `;
}

function pageIntro(
  eyebrow,
  title,
  description,
  actions = ""
) {
  return `
    <div class="pageIntro">

      <div class="pageIntroText">

        <span class="eyebrow">
          ${icon("sparkles")}
          ${eyebrow}
        </span>

        <h1>
          ${title}
        </h1>

        <p>
          ${description}
        </p>

      </div>

      ${
        actions
          ? `
            <div class="quickActions">
              ${actions}
            </div>
          `
          : ""
      }

    </div>
  `;
}

function workflow(
  active = 1
) {
  const steps = [
    [
      "01",
      t(
        "المشروع",
        "Project"
      ),
      t(
        "النطاق والموقع",
        "Scope & site"
      ),
      "projects"
    ],

    [
      "02",
      t(
        "الزيارة",
        "Visit"
      ),
      t(
        "الجدولة والتنفيذ",
        "Schedule & execute"
      ),
      "my_visits"
    ],

    [
      "03",
      t(
        "التقرير",
        "Report"
      ),
      t(
        "المراجعة والقرار",
        "Review & decision"
      ),
      "reports"
    ],

    [
      "04",
      t(
        "الملاحظة",
        "Finding"
      ),
      t(
        "التصنيف والخطورة",
        "Class & severity"
      ),
      "actions"
    ],

    [
      "05",
      t(
        "المعالجة",
        "Action"
      ),
      t(
        "الإغلاق والتصعيد",
        "Closure & escalation"
      ),
      "actions"
    ]
  ];

  return `
    <div class="workflow">

      ${steps
        .map(
          (
            item,
            index
          ) => {
            return `
              <div
                class="
                  workflowItem
                  ${
                    index + 1 ===
                    active
                      ? "active"
                      : ""
                  }
                "
              >

                <span>
                  ${item[0]}
                </span>

                <b>
                  ${item[1]}
                </b>

                <small>
                  ${item[2]}
                </small>

              </div>
            `;
          }
        )
        .join("")}

    </div>
  `;
}

function routeStrip(
  current
) {
  const items = [
    [
      "building-2",
      t(
        "مشروع الواحة",
        "Al Waha Project"
      )
    ],

    [
      "calendar-check",
      "VIS-2026-000123"
    ],

    [
      "file-text",
      "REP-2026-000094"
    ],

    [
      "triangle-alert",
      "FND-2026-0041"
    ],

    [
      "circle-check-big",
      "CAPA-2026-0041"
    ]
  ];

  return `
    <div class="routeStrip">

      ${items
        .map(
          (
            item,
            index
          ) => {
            return `
              <div
                class="
                  routeNode
                  ${
                    current === index
                      ? "active"
                      : ""
                  }
                "
              >
                ${icon(item[0])}
                ${item[1]}
              </div>

              ${
                index <
                items.length - 1
                  ? `
                    <span class="routeArrow">
                      ${icon(
                        state.lang ===
                          "ar"
                          ? "chevron-left"
                          : "chevron-right"
                      )}
                    </span>
                  `
                  : ""
              }
            `;
          }
        )
        .join("")}

    </div>
  `;
}

function setupNavigation() {
  const nav =
    navConfig[state.role];

  const html =
    nav
      .map(item => {
        return `
          <button
            class="
              navLink
              ${
                state.page ===
                item[0]
                  ? "active"
                  : ""
              }
            "
            onclick="go('${item[0]}')"
          >
            ${icon(item[1])}

            ${t(
              item[2],
              item[3]
            )}
          </button>
        `;
      })
      .join("");

  document.querySelector(
    "#mainNav"
  ).innerHTML = html;

  document.querySelector(
    "#mobileNav"
  ).innerHTML = html;

  refreshIcons();
}

function setupAccountMenu() {
  const menu =
    document.querySelector(
      "#accountMenu"
    );

  menu.innerHTML =
    Object.entries(roles)
      .map(
        ([key, role]) => {
          return `
            <button
              class="roleOption"
              onclick="switchRole('${key}')"
            >

              <div class="roleOptionIcon">
                ${icon(role.icon)}
              </div>

              <div>
                <b>
                  ${t(
                    role.ar,
                    role.en
                  )}
                </b>

                <span>
                  ${t(
                    role.nameAr,
                    role.nameEn
                  )}
                </span>
              </div>

            </button>
          `;
        }
      )
      .join("");

  refreshIcons();
}

function updateAccount() {
  const role =
    roles[state.role];

  document.querySelector(
    "#accountName"
  ).textContent =
    t(
      role.nameAr,
      role.nameEn
    );

  document.querySelector(
    "#accountRole"
  ).textContent =
    t(
      role.ar,
      role.en
    );

  document.querySelector(
    "#accountAvatar"
  ).textContent =
    (
      state.lang === "ar"
        ? role.nameAr
        : role.nameEn
    ).charAt(0);

  document.querySelector(
    "#workspaceName"
  ).textContent =
    t(
      role.ar,
      role.en
    );
}

function switchRole(role) {
  state.role = role;
  state.page = "home";

  document.querySelector(
    "#accountMenu"
  ).classList.remove(
    "open"
  );

  updateAccount();
  setupAccountMenu();
  setupNavigation();
  render();

  toast(
    t(
      "تم تبديل الحساب التجريبي",
      "Demo account changed"
    )
  );
}

function go(page) {
  state.page = page;

  document.querySelector(
    "#mobileNav"
  ).classList.remove(
    "open"
  );

  render();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function ownerHome() {
  return `
    ${pageIntro(
      t(
        "SYSTEM OWNER",
        "SYSTEM OWNER"
      ),
      t(
        "مساء الخير سلطان",
        "Good evening Sultan"
      ),
      t(
        "بدل الدخول في تفاصيل التشغيل اليومية تبدأ من صورة النظام العامة والصلاحيات والبلاغات الحساسة وحالة التشغيل",
        "Start from system-wide control permissions sensitive access and operational status instead of daily field work"
      )
    )}

    <section class="heroPanel">

      <div class="heroPanelInner">

        <div class="heroCopy">

          <span class="eyebrow">
            ${icon("shield-check")}
            ${t(
              "نظرة المالك",
              "Owner overview"
            )}
          </span>

          <h2>
            ${t(
              "النظام تحت السيطرة وكل دور يرى فقط ما يحتاجه",
              "One system with clearly separated responsibilities"
            )}
          </h2>

          <p>
            ${t(
              "الوصول إلى البلاغات الحساسة منفصل عن أي مسمى وظيفي وتستطيع منح أو سحب التصريح بنفسك بينما تظل باقي العمليات التشغيلية تحت إدارة الجودة",
              "Sensitive access is independent from job titles and only the System Owner can grant or revoke it while Quality Management handles operations"
            )}
          </p>

          <div class="heroActionRow">

            <button
              class="button primary"
              onclick="go('permissions')"
            >
              ${icon("shield-check")}
              ${t(
                "إدارة الصلاحيات",
                "Manage permissions"
              )}
            </button>

            <button
              class="button"
              onclick="go('sensitive')"
            >
              ${icon("lock-keyhole")}
              ${t(
                "البلاغات الحساسة",
                "Sensitive reports"
              )}
            </button>

          </div>

        </div>

        <div class="focusCard">

          <div class="focusHead">

            <span>
              ${t(
                "الحالة التشغيلية",
                "Operational status"
              )}
            </span>

            <span class="statusDot"></span>

          </div>

          <div class="focusMain">

            <strong>
              99.9%
            </strong>

            <span>
              ${t(
                "جاهزية النظام",
                "System availability"
              )}
            </span>

          </div>

          <div class="focusMeta">

            <div>
              <b>2</b>
              <span>
                ${t(
                  "مشاريع نشطة",
                  "Active projects"
                )}
              </span>
            </div>

            <div>
              <b>04:10</b>
              <span>
                ${t(
                  "آخر نسخة احتياطية",
                  "Last backup"
                )}
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>

    <section class="section">

      <div class="sectionHead">

        <div>
          <h2>
            ${t(
              "أهم ما يحتاج انتباهك",
              "What needs your attention"
            )}
          </h2>

          <p>
            ${t(
              "صفحة المالك لا تكرر تفاصيل إدارة الجودة",
              "Owner home avoids duplicating Quality Management work"
            )}
          </p>
        </div>

      </div>

      <div class="taskGrid">

        ${taskCard(
          "lock-keyhole",
          t(
            "البلاغات الحساسة",
            "Sensitive Reports"
          ),
          t(
            "قناة مستقلة لا يصل إليها أي دور تلقائيًا",
            "Independent channel with no automatic role access"
          ),
          "3",
          t(
            "بلاغات مفتوحة",
            "open reports"
          ),
          "go('sensitive')",
          "red"
        )}

        ${taskCard(
          "user-cog",
          t(
            "تغييرات الصلاحيات",
            "Permission Changes"
          ),
          t(
            "مراجعة آخر تغييرات الأدوار والنطاقات",
            "Review recent role and scope changes"
          ),
          "5",
          t(
            "هذا الأسبوع",
            "this week"
          ),
          "go('permissions')",
          "gold"
        )}

        ${taskCard(
          "database-backup",
          t(
            "النسخ والاستعادة",
            "Backup & Restore"
          ),
          t(
            "حالة النسخ وسياسة الاحتفاظ وتجربة الاستعادة",
            "Backup health retention policy and restore testing"
          ),
          "100%",
          t(
            "آخر نسخة ناجحة",
            "last run successful"
          ),
          "go('operations')",
          "blue"
        )}

        ${taskCard(
          "building-2",
          t(
            "المشاريع",
            "Projects"
          ),
          t(
            "الوصول للصورة العليا للمشاريع دون الدخول في تشغيل المفتش",
            "Executive project view without inspector workflow"
          ),
          "2",
          t(
            "مشاريع",
            "projects"
          ),
          "go('projects')"
        )}

      </div>

    </section>

    <section class="section">

      <div class="sectionHead">
        <div>
          <h2>
            ${t(
              "رحلة الحالة داخل النظام",
              "System case journey"
            )}
          </h2>

          <p>
            ${t(
              "أي حالة يمكن تتبعها من أصلها حتى إغلاقها",
              "Any case can be traced from origin through closure"
            )}
          </p>
        </div>
      </div>

      ${workflow(1)}

    </section>
  `;
}

function qualityAdminHome() {
  return `
    ${pageIntro(
      "QUALITY MANAGEMENT",
      t(
        "مركز عمل إدارة الجودة",
        "Quality Management Workspace"
      ),
      t(
        "ابدأ من المهام التشغيلية المطلوبة اليوم بدل البحث بين شاشات النظام",
        "Start directly from today's operational tasks instead of searching through system screens"
      ),
      `
        <button
          class="button primary"
          onclick="go('schedule')"
        >
          ${icon("calendar-plus")}
          ${t(
            "جدولة زيارة",
            "Schedule visit"
          )}
        </button>

        <button
          class="button"
          onclick="go('review')"
        >
          ${icon("stamp")}
          ${t(
            "التقارير بانتظار المراجعة",
            "Pending reviews"
          )}
        </button>
      `
    )}

    <section class="heroPanel">

      <div class="heroPanelInner">

        <div class="heroCopy">

          <span class="eyebrow">
            ${icon("badge-check")}
            ${t(
              "اليوم في الجودة",
              "Today in Quality"
            )}
          </span>

          <h2>
            ${t(
              "3 زيارات تحتاج إسناد و6 تقارير تنتظر المراجعة",
              "3 visits need assignment and 6 reports await review"
            )}
          </h2>

          <p>
            ${t(
              "التركيز هنا على ما يجب تنفيذه الآن من جدولة ومراجعة واعتماد وتصعيد بدل عرض كل وظائف النظام في قائمة واحدة",
              "This workspace focuses on scheduling review approvals and escalations rather than exposing every system function at once"
            )}
          </p>

          <div class="heroActionRow">

            <button
              class="button primary"
              onclick="go('schedule')"
            >
              ${icon("users")}
              ${t(
                "اختيار مفتش متاح",
                "Assign available inspector"
              )}
            </button>

            <button
              class="button"
              onclick="go('review')"
            >
              ${icon("file-check-2")}
              ${t(
                "مراجعة أحدث تقرير",
                "Review latest report"
              )}
            </button>

          </div>

        </div>

        <div class="focusCard">

          <div class="focusHead">

            <span>
              ${t(
                "أعلى أولوية",
                "Highest priority"
              )}
            </span>

            ${badge(
              t(
                "حرج",
                "Critical"
              ),
              "danger"
            )}

          </div>

          <div class="focusMain">

            <strong>
              CAPA-0041
            </strong>

            <span>
              ${t(
                "بوابة طوارئ · مشروع الواحة",
                "Emergency Gate · Al Waha"
              )}
            </span>

          </div>

          <div class="focusMeta">

            <div>
              <b>9</b>
              <span>
                ${t(
                  "أيام مفتوحة",
                  "days open"
                )}
              </span>
            </div>

            <div>
              <b>
                ${t(
                  "أحمر",
                  "Red"
                )}
              </b>
              <span>
                ${t(
                  "مرحلة التصعيد",
                  "escalation"
                )}
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>

    <section class="section">

      <div class="sectionHead">
        <div>
          <h2>
            ${t(
              "مهامك الرئيسية",
              "Your main tasks"
            )}
          </h2>

          <p>
            ${t(
              "كل بطاقة تفتح المهمة مباشرة",
              "Each card opens the task directly"
            )}
          </p>
        </div>
      </div>

      <div class="taskGrid">

        ${taskCard(
          "calendar-days",
          t(
            "الجدولة",
            "Scheduling"
          ),
          t(
            "اختر التاريخ وشاهد جميع المفتشين المتاحين والمجدولين مسبقًا",
            "Select date and instantly see available and busy inspectors"
          ),
          "3",
          t(
            "زيارات للإسناد",
            "visits to assign"
          ),
          "go('schedule')",
          "blue"
        )}

        ${taskCard(
          "stamp",
          t(
            "المراجعات",
            "Reviews"
          ),
          t(
            "تقارير تم إرسالها من المفتشين وتحتاج قرارًا",
            "Submitted inspector reports awaiting a decision"
          ),
          "6",
          t(
            "بانتظار المراجعة",
            "pending reviews"
          ),
          "go('review')",
          "gold"
        )}

        ${taskCard(
          "circle-alert",
          t(
            "الإجراءات المتصاعدة",
            "Escalated Actions"
          ),
          t(
            "حالات وصلت للأصفر أو البرتقالي أو الأحمر",
            "Cases that reached yellow orange or red escalation"
          ),
          "4",
          t(
            "تحتاج متابعة",
            "need follow-up"
          ),
          "go('analytics')",
          "red"
        )}

        ${taskCard(
          "chart-no-axes-combined",
          t(
            "التقارير والتحليلات",
            "Reports & Analytics"
          ),
          t(
            "المقارنات والاتجاهات والملاحظات والشكاوى والعقود",
            "Trends findings complaints project comparison and contracts"
          ),
          "88%",
          t(
            "متوسط عام",
            "overall score"
          ),
          "go('analytics')"
        )}

      </div>

    </section>

    <section class="section">

      <div class="sectionHead">
        <div>
          <h2>
            ${t(
              "تسلسل العمل",
              "Operational journey"
            )}
          </h2>
        </div>
      </div>

      ${workflow(2)}

    </section>
  `;
}

function qualityStaffHome() {
  return `
    ${pageIntro(
      "QUALITY OFFICER",
      t(
        "صباح الخير سارة",
        "Good morning Sarah"
      ),
      t(
        "أمامك فقط التقارير والحالات التي تحتاج مراجعتك أو متابعتك",
        "You only see reports and cases requiring your review or follow-up"
      )
    )}

    <section class="heroPanel">

      <div class="heroPanelInner">

        <div class="heroCopy">

          <span class="eyebrow">
            ${icon("clipboard-check")}
            ${t(
              "قائمة العمل",
              "Work queue"
            )}
          </span>

          <h2>
            ${t(
              "ابدئي من التقارير الجديدة ثم تابعي الحالات المعادة",
              "Start with new reports then follow returned cases"
            )}
          </h2>

          <p>
            ${t(
              "لا تظهر لك وظائف الجدولة أو إدارة النماذج إلا إذا تم إضافتها صراحةً إلى قالب دورك",
              "Scheduling and form management stay hidden unless explicitly enabled in your role template"
            )}
          </p>

        </div>

        <div class="focusCard">

          <div class="focusHead">
            <span>
              ${t(
                "بانتظارك",
                "Waiting for you"
              )}
            </span>

            ${badge(
              "6",
              "warning"
            )}
          </div>

          <div class="focusMain">
            <strong>
              REP-000094
            </strong>

            <span>
              ${t(
                "آخر تقرير وصل للمراجعة",
                "Latest report awaiting review"
              )}
            </span>
          </div>

        </div>

      </div>

    </section>

    <section class="section">

      <div class="taskGrid">

        ${taskCard(
          "stamp",
          t(
            "تقارير للمراجعة",
            "Reports to review"
          ),
          t(
            "افتح التقرير وراجع البنود والأدلة ثم أعده أو صعّده للاعتماد",
            "Review items and evidence then return or move forward"
          ),
          "6",
          t(
            "تقارير",
            "reports"
          ),
          "go('review')",
          "gold"
        )}

        ${taskCard(
          "rotate-ccw",
          t(
            "معاد للمفتش",
            "Returned to inspector"
          ),
          t(
            "حالات تم إعادتها لاستكمال دليل أو ملاحظة",
            "Cases returned for missing evidence or information"
          ),
          "2",
          t(
            "حالتان",
            "cases"
          ),
          "go('review')",
          "blue"
        )}

        ${taskCard(
          "circle-check-big",
          t(
            "الإجراءات",
            "Actions"
          ),
          t(
            "متابعة أدلة المعالجة قبل الإغلاق",
            "Review treatment evidence before closure"
          ),
          "5",
          t(
            "بانتظار الجودة",
            "pending quality"
          ),
          "go('actions')"
        )}

        ${taskCard(
          "file-chart-column",
          t(
            "التقارير",
            "Reports"
          ),
          t(
            "الوصول للتقارير التشغيلية ضمن نطاقك فقط",
            "Operational reports within your assigned scope"
          ),
          "24",
          t(
            "هذا الشهر",
            "this month"
          ),
          "go('reports')"
        )}

      </div>

    </section>
  `;
}

function inspectorHome() {
  return `
    ${pageIntro(
      "FIELD INSPECTOR",
      t(
        "مرحبًا خالد",
        "Welcome Khaled"
      ),
      t(
        "صفحتك تبدأ من زياراتك مباشرة ولا تعرض لك تحليلات المشاريع أو نتائجها العامة",
        "Your workspace begins with assigned visits and does not expose project analytics or general project scores"
      )
    )}

    <section class="heroPanel">

      <div class="heroPanelInner">

        <div class="heroCopy">

          <span class="eyebrow">
            ${icon("map-pin-check")}
            ${t(
              "زيارتك القادمة",
              "Your next visit"
            )}
          </span>

          <h2>
            ${t(
              "مشروع الواحة السكني",
              "Al Waha Residential"
            )}
          </h2>

          <p>
            ${t(
              "اليوم الساعة 10:30 · البوابة الرئيسية · تفتيش دوري · وردية صباحية",
              "Today 10:30 · Main Gate · Routine Inspection · Morning Shift"
            )}
          </p>

          <div class="heroActionRow">

            <button
              class="button primary"
              onclick="go('inspection')"
            >
              ${icon("play")}
              ${t(
                "بدء التفتيش",
                "Start inspection"
              )}
            </button>

            <button
              class="button"
              onclick="go('my_visits')"
            >
              ${icon("calendar-days")}
              ${t(
                "عرض كل زياراتي",
                "View my visits"
              )}
            </button>

          </div>

        </div>

        <div class="focusCard">

          <div class="focusHead">

            <span>
              VIS-2026-000123
            </span>

            ${badge(
              t(
                "مجدولة",
                "Scheduled"
              ),
              "info"
            )}

          </div>

          <div class="focusMain">

            <strong>
              10:30
            </strong>

            <span>
              ${t(
                "اليوم",
                "Today"
              )}
            </span>

          </div>

          <div class="focusMeta">

            <div>
              <b>v2.4</b>
              <span>
                ${t(
                  "إصدار النموذج",
                  "form version"
                )}
              </span>
            </div>

            <div>
              <b>42</b>
              <span>
                ${t(
                  "بند تفتيش",
                  "inspection items"
                )}
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>

    <section class="section">

      <div class="sectionHead">

        <div>
          <h2>
            ${t(
              "ما الذي تحتاج تنفيذه",
              "What you need to do"
            )}
          </h2>

          <p>
            ${t(
              "لا توجد قوائم إدارية غير مرتبطة بعمل المفتش",
              "No unrelated administrative modules"
            )}
          </p>
        </div>

      </div>

      <div class="taskGrid">

        ${taskCard(
          "calendar-check",
          t(
            "زيارات اليوم",
            "Today's Visits"
          ),
          t(
            "الزيارات التي تم إسنادها لك فقط",
            "Only visits assigned to your account"
          ),
          "3",
          t(
            "زيارات",
            "visits"
          ),
          "go('my_visits')",
          "blue"
        )}

        ${taskCard(
          "save",
          t(
            "المسودات",
            "Drafts"
          ),
          t(
            "تفتيش بدأت به ولم يتم إرساله بعد",
            "Inspections started but not submitted"
          ),
          "1",
          t(
            "مسودة",
            "draft"
          ),
          "go('inspection')"
        )}

        ${taskCard(
          "undo-2",
          t(
            "معاد للاستكمال",
            "Returned"
          ),
          t(
            "تقارير أعادتها الجودة لاستكمال المطلوب",
            "Reports returned by Quality for completion"
          ),
          "2",
          t(
            "تحتاج إجراء",
            "need action"
          ),
          "go('returned')",
          "gold"
        )}

        ${taskCard(
          "file-text",
          t(
            "تقاريري",
            "My Reports"
          ),
          t(
            "تقارير زياراتك فقط والتنزيل حسب الصلاحية",
            "Only your reports with permission-based download"
          ),
          "14",
          t(
            "تقارير",
            "reports"
          ),
          "go('my_reports')"
        )}

      </div>

    </section>

    <section class="section">

      <div class="permissionNotice">

        ${icon("eye-off")}

        <span>
          ${t(
            "نتيجة المشروع والتحليلات العامة والمقارنة بين المشاريع غير متاحة للمفتش وتظل الحسابات داخل النظام محسوبة داخليًا دون عرضها لهذا الدور",
            "Project scores general analytics and cross-project comparisons are not available to inspectors even though calculations remain stored internally"
          )}
        </span>

      </div>

    </section>
  `;
}

function projectManagerHome() {
  const p =
    projects[0];

  return `
    ${pageIntro(
      "PROJECT MANAGER",
      t(
        "مشروع الواحة أمامك الآن",
        "Al Waha is your current workspace"
      ),
      t(
        "بدل عرض جميع أجزاء النظام تبدأ من حالة مشروعك وما يحتاج قرارًا أو معالجة اليوم",
        "Start from your project status and the items requiring action today"
      )
    )}

    <section class="heroPanel">

      <div class="heroPanelInner">

        <div class="heroCopy">

          <span class="eyebrow">
            ${icon("building-2")}
            ${p.code}
          </span>

          <h2>
            ${projectName(
              p.id
            )}
          </h2>

          <p>
            ${t(
              "ترى بيانات هذا المشروع فقط بما يشمل التقارير والملاحظات والإجراءات والتدريب والتحليلات الخاصة به",
              "You only see this project's reports findings actions training and analytics"
            )}
          </p>

          <div class="heroActionRow">

            <button
              class="button primary"
              onclick="go('actions')"
            >
              ${icon("circle-alert")}
              ${t(
                "الملاحظات المطلوب معالجتها",
                "Findings requiring action"
              )}
            </button>

            <button
              class="button"
              onclick="go('reports')"
            >
              ${icon("file-chart-column")}
              ${t(
                "تقارير المشروع",
                "Project reports"
              )}
            </button>

          </div>

        </div>

        <div class="focusCard">

          <div class="focusHead">

            <span>
              ${t(
                "تقييم المشروع",
                "Project score"
              )}
            </span>

            ${badge(
              t(
                "مستقر",
                "Stable"
              ),
              "success"
            )}

          </div>

          <div class="focusMain">

            <strong>
              ${p.score}/100
            </strong>

            <span>
              ${t(
                "وفق المعادلة المعتمدة لاحقًا",
                "under the final approved formula"
              )}
            </span>

          </div>

          <div class="focusMeta">

            <div>
              <b>
                ${p.openActions}
              </b>

              <span>
                ${t(
                  "إجراءات مفتوحة",
                  "open actions"
                )}
              </span>
            </div>

            <div>
              <b>
                +${p.improvement}%
              </b>

              <span>
                ${t(
                  "اتجاه التحسن",
                  "improvement"
                )}
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>

    <section class="section">

      <div class="taskGrid">

        ${taskCard(
          "triangle-alert",
          t(
            "الملاحظات المفتوحة",
            "Open Findings"
          ),
          t(
            "ما يحتاج معالجة من فريق مشروعك",
            "Items your project team needs to resolve"
          ),
          "7",
          t(
            "ملاحظات",
            "findings"
          ),
          "go('actions')",
          "red"
        )}

        ${taskCard(
          "clock-alert",
          t(
            "إجراءات متأخرة",
            "Overdue Actions"
          ),
          t(
            "حالات تجاوزت المدة المحددة",
            "Cases beyond their target date"
          ),
          "3",
          t(
            "متأخرة",
            "overdue"
          ),
          "go('actions')",
          "gold"
        )}

        ${taskCard(
          "graduation-cap",
          t(
            "طلبات التدريب",
            "Training Requests"
          ),
          t(
            "طلبات تحتاج موافقتك قبل الانتقال للجودة",
            "Requests requiring your approval before Quality"
          ),
          "2",
          t(
            "بانتظار القرار",
            "awaiting decision"
          ),
          "go('training')",
          "blue"
        )}

        ${taskCard(
          "file-check-2",
          t(
            "التقارير المعتمدة",
            "Approved Reports"
          ),
          t(
            "التقارير الرسمية الخاصة بمشروعك",
            "Official approved reports for your project"
          ),
          "11",
          t(
            "هذا الشهر",
            "this month"
          ),
          "go('reports')"
        )}

      </div>

    </section>

    <section class="section">

      ${workflow(4)}

    </section>
  `;
}

function supervisorHome() {
  return `
    ${pageIntro(
      "GUARD SUPERVISOR",
      t(
        "إدارة الحراس والتدريب",
        "Guards & Training"
      ),
      t(
        "صفحتك مخصصة لتقييم الحراس والملاحظات وطلبات التدريب فقط",
        "Your workspace focuses on guard evaluations findings and training requests"
      )
    )}

    <section class="heroPanel">

      <div class="heroPanelInner">

        <div class="heroCopy">

          <span class="eyebrow">
            ${icon("users-round")}
            ${t(
              "فريق مشروع الواحة",
              "Al Waha Guard Team"
            )}
          </span>

          <h2>
            ${t(
              "لديك تقييمان يحتاجان إكمال اليوم",
              "Two guard evaluations need completion today"
            )}
          </h2>

          <p>
            ${t(
              "يمكنك فتح سجل كل حارس وتسجيل التقييم والملاحظات ورفع طلب تدريب عند الحاجة",
              "Open each guard record add evaluation notes and create training requests when needed"
            )}
          </p>

          <div class="heroActionRow">

            <button
              class="button primary"
              onclick="go('guards')"
            >
              ${icon("user-round-check")}
              ${t(
                "تقييم حارس",
                "Evaluate guard"
              )}
            </button>

            <button
              class="button"
              onclick="go('training')"
            >
              ${icon("graduation-cap")}
              ${t(
                "طلب دورة",
                "Request training"
              )}
            </button>

          </div>

        </div>

        <div class="focusCard">

          <div class="focusHead">
            <span>
              ${t(
                "الفريق",
                "Team"
              )}
            </span>

            ${badge(
              t(
                "نشط",
                "Active"
              ),
              "success"
            )}
          </div>

          <div class="focusMain">
            <strong>28</strong>

            <span>
              ${t(
                "حارسًا ضمن نطاقك",
                "guards in your scope"
              )}
            </span>
          </div>

        </div>

      </div>

    </section>

    <section class="section">

      <div class="taskGrid">

        ${taskCard(
          "user-round-check",
          t(
            "التقييمات",
            "Evaluations"
          ),
          t(
            "تقييم منفصل لكل حارس مع الملاحظات",
            "Separate evaluation and notes for every guard"
          ),
          "2",
          t(
            "تحتاج إكمال",
            "need completion"
          ),
          "go('guards')",
          "gold"
        )}

        ${taskCard(
          "repeat-2",
          t(
            "ملاحظات متكررة",
            "Repeated Findings"
          ),
          t(
            "حراس لديهم نفس الملاحظة أكثر من مرة",
            "Guards with repeated findings"
          ),
          "4",
          t(
            "حالات",
            "cases"
          ),
          "go('guards')",
          "red"
        )}

        ${taskCard(
          "graduation-cap",
          t(
            "طلبات التدريب",
            "Training Requests"
          ),
          t(
            "متابعة الطلب من مدير المشروع ثم الجودة",
            "Track request through Project Manager then Quality"
          ),
          "3",
          t(
            "طلبات",
            "requests"
          ),
          "go('training')",
          "blue"
        )}

      </div>

    </section>
  `;
}

function guardHome() {
  return `
    ${pageIntro(
      "SECURITY GUARD",
      t(
        "خدماتك الشخصية",
        "Your personal services"
      ),
      t(
        "واجهة بسيطة لا تعرض أي وظائف إدارية أو بيانات تخص الآخرين",
        "A simple personal workspace without administrative functions or other users' data"
      )
    )}

    <section class="heroPanel">

      <div class="heroPanelInner">

        <div class="heroCopy">

          <span class="eyebrow">
            ${icon("shield")}
            EMP-1042
          </span>

          <h2>
            ${t(
              "مرحبًا محمد",
              "Welcome Mohammed"
            )}
          </h2>

          <p>
            ${t(
              "يمكنك تقديم استبيان أو شكوى أو بلاغ حساس ومتابعة ما أرسلته أنت فقط",
              "You can submit surveys complaints or sensitive reports and track only your own submissions"
            )}
          </p>

          <div class="heroActionRow">

            <button
              class="button primary"
              onclick="go('sensitive')"
            >
              ${icon("lock-keyhole")}
              ${t(
                "إرسال بلاغ خاص",
                "Submit private report"
              )}
            </button>

          </div>

        </div>

        <div class="focusCard">

          <div class="focusHead">
            <span>
              ${t(
                "آخر بلاغ",
                "Latest report"
              )}
            </span>

            ${badge(
              t(
                "قيد المتابعة",
                "In progress"
              ),
              "info"
            )}
          </div>

          <div class="focusMain">
            <strong>
              SEC-0012
            </strong>

            <span>
              ${t(
                "يوجد رد جديد",
                "New reply available"
              )}
            </span>
          </div>

        </div>

      </div>

    </section>

    <section class="section">

      <div class="taskGrid">

        ${taskCard(
          "clipboard-list",
          t(
            "استبيان",
            "Survey"
          ),
          t(
            "إرسال استبيان شخصي",
            "Submit a personal survey"
          ),
          "01",
          t(
            "خدمة",
            "service"
          ),
          "go('my_services')"
        )}

        ${taskCard(
          "message-square-warning",
          t(
            "شكوى",
            "Complaint"
          ),
          t(
            "إرسال شكوى ومتابعة حالتها",
            "Submit and track a complaint"
          ),
          "01",
          t(
            "خدمة",
            "service"
          ),
          "go('my_services')",
          "gold"
        )}

        ${taskCard(
          "lock-keyhole",
          t(
            "بلاغ حساس",
            "Sensitive Report"
          ),
          t(
            "قناة مستقلة ومحكومة بتصريح خاص",
            "Independent private channel with explicit access"
          ),
          "01",
          t(
            "خدمة",
            "service"
          ),
          "go('sensitive')",
          "red"
        )}

      </div>

    </section>
  `;
}

function projectsPage() {
  let data = projects;

  if (
    state.role ===
    "project_manager"
  ) {
    data =
      projects.filter(
        p => p.id === "P-001"
      );
  }

  return `
    ${pageIntro(
      "PROJECTS",
      t(
        "المشاريع",
        "Projects"
      ),
      t(
        "كل مشروع هو نقطة البداية الطبيعية للزيارات والتقارير والملاحظات والإجراءات المرتبطة به",
        "Each project is the natural starting point for its visits reports findings and actions"
      )
    )}

    <div class="grid2">

      ${data
        .map(project => {
          return `
            <div class="card">

              <div class="cardHead">

                <div>
                  <span class="eyebrow">
                    ${project.code}
                  </span>

                  <h3
                    style="
                      margin-top:7px
                    "
                  >
                    ${
                      state.lang ===
                      "ar"
                        ? project.ar
                        : project.en
                    }
                  </h3>

                  <p>
                    ${
                      state.lang ===
                      "ar"
                        ? project.regionAr
                        : project.regionEn
                    }
                  </p>
                </div>

                ${badge(
                  t(
                    "نشط",
                    "Active"
                  ),
                  "success"
                )}

              </div>

              <div class="statRow">

                ${statBox(
                  project.score +
                    "/100",
                  t(
                    "تقييم المشروع",
                    "Project score"
                  )
                )}

                ${statBox(
                  project.findings,
                  t(
                    "الملاحظات",
                    "Findings"
                  )
                )}

                ${statBox(
                  project.openActions,
                  t(
                    "إجراءات مفتوحة",
                    "Open actions"
                  )
                )}

                ${statBox(
                  project.contractDays,
                  t(
                    "يوم للعقد",
                    "contract days"
                  )
                )}

              </div>

              <div
                class="heroActionRow"
              >

                <button
                  class="button primary"
                  onclick="openProject('${project.id}')"
                >
                  ${icon("arrow-up-left")}
                  ${t(
                    "فتح المشروع",
                    "Open project"
                  )}
                </button>

              </div>

            </div>
          `;
        })
        .join("")}

    </div>
  `;
}

function projectPage() {
  const p =
    projects[0];

  return `
    ${pageIntro(
      p.code,
      projectName(
        p.id
      ),
      t(
        "كل ما يتعلق بهذا المشروع موجود في رحلة واحدة بدل التنقل بين أقسام غير مترابطة",
        "Everything related to this project follows one connected journey instead of disconnected modules"
      )
    )}

    ${routeStrip(0)}

    <div class="statRow">

      ${statBox(
        p.score + "/100",
        t(
          "التقييم",
          "Score"
        )
      )}

      ${statBox(
        p.employees,
        t(
          "الموظفون",
          "Employees"
        )
      )}

      ${statBox(
        p.findings,
        t(
          "الملاحظات",
          "Findings"
        )
      )}

      ${statBox(
        p.openActions,
        t(
          "إجراءات مفتوحة",
          "Open actions"
        )
      )}

    </div>

    <section class="section">

      <div class="grid2">

        <div class="card">

          <div class="cardHead">
            <div>
              <h3>
                ${t(
                  "آخر الزيارات",
                  "Recent visits"
                )}
              </h3>

              <p>
                ${t(
                  "افتح الزيارة لتنتقل للتقرير والملاحظات المرتبطة بها",
                  "Open a visit to continue into its report and findings"
                )}
              </p>
            </div>
          </div>

          <div class="list">

            ${listItem(
              "calendar-check",
              "VIS-2026-000123",
              t(
                "04 أكتوبر · تفتيش دوري · البوابة الرئيسية",
                "04 Oct · Routine · Main Gate"
              ),
              `
                <button
                  class="button"
                  onclick="go('reports')"
                >
                  ${t(
                    "فتح",
                    "Open"
                  )}
                </button>
              `
            )}

            ${listItem(
              "calendar-check",
              "VIS-2026-000118",
              t(
                "01 أكتوبر · زيارة متابعة",
                "01 Oct · Follow-up"
              ),
              badge(
                t(
                  "منفذة",
                  "Completed"
                ),
                "success"
              )
            )}

          </div>

        </div>

        <div class="card">

          <div class="cardHead">
            <div>
              <h3>
                ${t(
                  "الملاحظات المطلوبة",
                  "Findings requiring action"
                )}
              </h3>
            </div>

            ${badge(
              "3",
              "danger"
            )}

          </div>

          <div class="list">

            ${listItem(
              "siren",
              t(
                "بوابة الطوارئ",
                "Emergency gate"
              ),
              t(
                "حرجة · متأخرة · تصعيد أحمر",
                "Critical · overdue · red escalation"
              ),
              `
                <button
                  class="button danger"
                  onclick="go('actions')"
                >
                  ${t(
                    "معالجة",
                    "Resolve"
                  )}
                </button>
              `
            )}

            ${listItem(
              "clock-3",
              t(
                "سجل الزوار",
                "Visitor log"
              ),
              t(
                "متوسطة · تصعيد أصفر",
                "Medium · yellow escalation"
              ),
              badge(
                t(
                  "مفتوحة",
                  "Open"
                ),
                "warning"
              )
            )}

          </div>

        </div>

      </div>

    </section>
  `;
}

function schedulePage() {
  return `
    ${pageIntro(
      "INSPECTION SCHEDULING",
      t(
        "جدولة الزيارات بدون تعارض",
        "Conflict-free Visit Scheduling"
      ),
      t(
        "الجدولة من إدارة الجودة فقط وعند اختيار اليوم والوقت تظهر حالة جميع مفتشي الجودة مباشرة",
        "Scheduling is controlled by Quality Management and date/time selection immediately shows every inspector's availability"
      )
    )}

    <div class="card">

      <div class="cardHead">

        <div>
          <h3>
            ${t(
              "زيارة جديدة",
              "New Visit"
            )}
          </h3>

          <p>
            ${t(
              "ابدأ بالموعد ثم اختر المفتش المتاح",
              "Choose date and time then select an available inspector"
            )}
          </p>
        </div>

        ${badge(
          t(
            "إدارة الجودة فقط",
            "Quality Management only"
          ),
          "info"
        )}

      </div>

      <div class="availabilityHeader">

        <div class="field">
          <label>
            ${t(
              "التاريخ",
              "Date"
            )}
          </label>

          <input
            id="scheduleDate"
            class="input"
            type="date"
            value="2026-10-08"
            onchange="renderAvailability()"
          >
        </div>

        <div class="field">
          <label>
            ${t(
              "الوقت",
              "Time"
            )}
          </label>

          <input
            id="scheduleTime"
            class="input"
            type="time"
            value="10:00"
            onchange="renderAvailability()"
          >
        </div>

        <div class="field">
          <label>
            ${t(
              "المشروع",
              "Project"
            )}
          </label>

          <select class="input">
            <option>
              ${projectName(
                "P-001"
              )}
            </option>

            <option>
              ${projectName(
                "P-002"
              )}
            </option>
          </select>
        </div>

      </div>

      <div class="sectionHead">

        <div>
          <h2>
            ${t(
              "اختر المفتش",
              "Choose Inspector"
            )}
          </h2>

          <p>
            ${t(
              "المفتش المشغول في نفس الموعد لا يمكن إسناده",
              "An inspector already assigned at that time cannot be selected"
            )}
          </p>
        </div>

      </div>

      <div
        id="inspectorAvailability"
        class="inspectors"
      ></div>

      <div class="heroActionRow">

        <button
          class="button primary"
          onclick="saveVisit()"
        >
          ${icon("calendar-check")}
          ${t(
            "حفظ وإرسال للمفتش",
            "Save & notify inspector"
          )}
        </button>

      </div>

    </div>

    <section class="section">

      <div class="card">

        <div class="cardHead">

          <div>
            <h3>
              ${t(
                "الزيارات القادمة",
                "Upcoming Visits"
              )}
            </h3>

            <p>
              ${t(
                "إعادة الجدولة أو الإلغاء يحتاج سببًا ويتم حفظ الموعد السابق",
                "Reschedule or cancellation requires a reason and retains previous schedule"
              )}
            </p>
          </div>

        </div>

        <div class="tableWrap">

          <table>

            <thead>
              <tr>
                <th>زيارة</th>
                <th>المشروع</th>
                <th>المفتش</th>
                <th>الموعد</th>
                <th>الحالة</th>
                <th></th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>VIS-2026-000123</td>
                <td>${projectName("P-001")}</td>
                <td>${t("خالد السالم","Khaled Al Salem")}</td>
                <td>08 Oct · 10:00</td>
                <td>${badge(t("مجدولة","Scheduled"),"info")}</td>
                <td>
                  <button
                    class="button"
                    onclick="rescheduleVisit()"
                  >
                    ${t(
                      "تعديل",
                      "Edit"
                    )}
                  </button>
                </td>
              </tr>

              <tr>
                <td>VIS-2026-000127</td>
                <td>${projectName("P-002")}</td>
                <td>${t("ريم القحطاني","Reem Al Qahtani")}</td>
                <td>08 Oct · 13:00</td>
                <td>${badge(t("مجدولة","Scheduled"),"info")}</td>
                <td>
                  <button
                    class="button"
                    onclick="rescheduleVisit()"
                  >
                    ${t(
                      "تعديل",
                      "Edit"
                    )}
                  </button>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </section>
  `;
}

function availabilityStatus(
  inspector,
  date,
  time
) {
  const visits =
    inspector.visits[date] || [];

  return {
    busy:
      visits.includes(time)
  };
}

function renderAvailability() {
  const container =
    document.querySelector(
      "#inspectorAvailability"
    );

  if (!container) {
    return;
  }

  const date =
    document.querySelector(
      "#scheduleDate"
    )?.value ||
    "2026-10-08";

  const time =
    document.querySelector(
      "#scheduleTime"
    )?.value ||
    "10:00";

  container.innerHTML =
    inspectors
      .map(inspector => {
        const result =
          availabilityStatus(
            inspector,
            date,
            time
          );

        return `
          <div
            class="
              inspectorCard
              ${
                result.busy
                  ? "busy"
                  : "available"
              }
              ${
                state.selectedInspector ===
                inspector.id
                  ? "selected"
                  : ""
              }
            "
            ${
              result.busy
                ? ""
                : `
                  onclick="
                    selectInspector(
                      '${inspector.id}'
                    )
                  "
                `
            }
          >

            <div class="inspectorTop">

              <div>
                <b>
                  ${t(
                    inspector.ar,
                    inspector.en
                  )}
                </b>

                <span>
                  ${inspector.emp}
                </span>
              </div>

              ${badge(
                result.busy
                  ? t(
                      "مجدول",
                      "Busy"
                    )
                  : t(
                      "متاح",
                      "Available"
                    ),
                result.busy
                  ? "danger"
                  : "success"
              )}

            </div>

            <div class="availabilityState">

              <span
                class="
                  availabilityDot
                  ${
                    result.busy
                      ? "busy"
                      : "available"
                  }
                "
              ></span>

              ${
                result.busy
                  ? t(
                      `لديه زيارة الساعة ${time}`,
                      `Has a visit at ${time}`
                    )
                  : t(
                      "لا يوجد تعارض",
                      "No conflict"
                    )
              }

            </div>

          </div>
        `;
      })
      .join("");

  refreshIcons();
}

function selectInspector(id) {
  state.selectedInspector = id;

  renderAvailability();
}

function saveVisit() {
  if (!state.selectedInspector) {
    toast(
      t(
        "اختار مفتشًا متاحًا أولًا",
        "Choose an available inspector first"
      )
    );

    return;
  }

  toast(
    t(
      "تمت جدولة الزيارة وإرسال إشعار للمفتش",
      "Visit scheduled and inspector notified"
    )
  );
}

function rescheduleVisit() {
  modal(`
    <h2>
      ${t(
        "إعادة جدولة أو إلغاء",
        "Reschedule or Cancel"
      )}
    </h2>

    <div class="field">

      <label>
        ${t(
          "الإجراء",
          "Action"
        )}
      </label>

      <select class="input">
        <option>
          ${t(
            "إعادة جدولة",
            "Reschedule"
          )}
        </option>

        <option>
          ${t(
            "إلغاء",
            "Cancel"
          )}
        </option>
      </select>

    </div>

    <div class="field">

      <label>
        ${t(
          "السبب",
          "Reason"
        )}
      </label>

      <textarea
        class="input"
        placeholder="${t(
          "السبب إلزامي ويتم حفظه تاريخيًا",
          "Reason is mandatory and retained historically"
        )}"
      ></textarea>

    </div>

    <div class="permissionNotice">

      ${icon("history")}

      <span>
        ${t(
          "النظام يحتفظ بالموعد السابق والجديد واسم المستخدم ووقت التعديل",
          "The system retains previous and new schedule user and change timestamp"
        )}
      </span>

    </div>

    <button
      class="button primary"
      style="margin-top:14px"
      onclick="
        toast(
          t(
            'تم تسجيل التعديل',
            'Change recorded'
          )
        );
        closeModal()
      "
    >
      ${t(
        "حفظ",
        "Save"
      )}
    </button>
  `);
}

function myVisitsPage() {
  return `
    ${pageIntro(
      "MY FIELD VISITS",
      t(
        "زياراتي",
        "My Visits"
      ),
      t(
        "تظهر فقط الزيارات المسندة إلى حساب المفتش الحالي",
        "Only visits assigned to the current inspector are shown"
      )
    )}

    <div class="grid2">

      <div class="card">

        <div class="cardHead">
          <div>
            <h3>
              ${t(
                "اليوم",
                "Today"
              )}
            </h3>
          </div>

          ${badge(
            "3",
            "info"
          )}
        </div>

        <div class="list">

          ${listItem(
            "map-pin-check",
            "VIS-2026-000123",
            t(
              "10:30 · مشروع الواحة · تفتيش دوري",
              "10:30 · Al Waha · Routine inspection"
            ),
            `
              <button
                class="button primary"
                onclick="go('inspection')"
              >
                ${t(
                  "ابدأ",
                  "Start"
                )}
              </button>
            `
          )}

          ${listItem(
            "map-pin-check",
            "VIS-2026-000128",
            t(
              "13:30 · مشروع الواحة · متابعة",
              "13:30 · Al Waha · Follow-up"
            ),
            badge(
              t(
                "لاحقًا",
                "Later"
              ),
              "neutral"
            )
          )}

        </div>

      </div>

      <div class="card">

        <div class="cardHead">
          <div>
            <h3>
              ${t(
                "هذا الأسبوع",
                "This Week"
              )}
            </h3>
          </div>
        </div>

        <div class="list">

          ${listItem(
            "calendar",
            "VIS-2026-000135",
            t(
              "09 أكتوبر · 09:00",
              "09 Oct · 09:00"
            ),
            badge(
              t(
                "مجدولة",
                "Scheduled"
              ),
              "info"
            )
          )}

          ${listItem(
            "calendar",
            "VIS-2026-000140",
            t(
              "10 أكتوبر · 16:00",
              "10 Oct · 16:00"
            ),
            badge(
              t(
                "مجدولة",
                "Scheduled"
              ),
              "info"
            )
          )}

        </div>

      </div>

    </div>
  `;
}

function complianceScore() {
  const weights = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
  };

  let compliant = 0;
  let applicable = 0;

  Object.keys(
    weights
  ).forEach(key => {
    if (
      state.answers[key] !==
      "na"
    ) {
      applicable +=
        weights[key];

      if (
        state.answers[key] ===
        "ok"
      ) {
        compliant +=
          weights[key];
      }
    }
  });

  if (!applicable) {
    return null;
  }

  return Math.round(
    compliant /
      applicable *
      100
  );
}

function inspectionQuestion(
  id,
  title,
  description,
  weight
) {
  const answer =
    state.answers[id];

  return `
    <div class="question">

      <div class="questionHead">

        <div>
          <b>
            ${title}
          </b>

          <p>
            ${description}
          </p>
        </div>

        <span>
          ${t(
            "وزن",
            "Weight"
          )}
          ${weight}
        </span>

      </div>

      <div class="answers">

        <button
          class="
            answer
            ${
              answer === "ok"
                ? "selected ok"
                : ""
            }
          "
          onclick="
            answerQuestion(
              '${id}',
              'ok'
            )
          "
        >
          ${icon("check")}
          ${t(
            "مطابق",
            "Compliant"
          )}
        </button>

        <button
          class="
            answer
            ${
              answer === "fail"
                ? "selected fail"
                : ""
            }
          "
          onclick="
            answerQuestion(
              '${id}',
              'fail'
            )
          "
        >
          ${icon("x")}
          ${t(
            "غير مطابق",
            "Non-compliant"
          )}
        </button>

        <button
          class="
            answer
            ${
              answer === "na"
                ? "selected na"
                : ""
            }
          "
          onclick="
            answerQuestion(
              '${id}',
              'na'
            )
          "
        >
          ${icon("minus")}
          ${t(
            "لا ينطبق",
            "N/A"
          )}
        </button>

      </div>

    </div>
  `;
}

function inspectionPage() {
  const score =
    complianceScore();

  return `
    ${pageIntro(
      "FIELD INSPECTION",
      t(
        "تنفيذ الزيارة",
        "Execute Visit"
      ),
      t(
        "المفتش يركز على المهمة الحالية فقط ولا يرى نتيجة المشروع أو المقارنات",
        "Inspector focuses only on the current task without project analytics or comparisons"
      ),
      `
        <button
          class="button"
          onclick="
            toast(
              t(
                'تم حفظ المسودة',
                'Draft saved'
              )
            )
          "
        >
          ${icon("save")}
          ${t(
            "حفظ مسودة",
            "Save draft"
          )}
        </button>
      `
    )}

    ${routeStrip(1)}

    <div class="visitHero">

      <div class="visitInfo">

        <span class="eyebrow">
          VIS-2026-000123
        </span>

        <h2>
          ${projectName(
            "P-001"
          )}
        </h2>

        <p
          style="
            color:var(--muted);
            font-size:9px;
            line-height:1.8
          "
        >
          ${t(
            "البوابة الرئيسية · تفتيش دوري · وردية صباحية",
            "Main Gate · Routine Inspection · Morning Shift"
          )}
        </p>

        <div class="visitMeta">

          <span class="metaPill">
            ${icon("clock-3")}
            10:30
          </span>

          <span class="metaPill">
            ${icon("blocks")}
            Form v2.4
          </span>

          <span class="metaPill">
            ${icon("user-round")}
            ${t(
              "خالد السالم",
              "Khaled Al Salem"
            )}
          </span>

        </div>

      </div>

      <div class="progressCard">

        <div class="progressRing">

          <div>
            <b>
              74%
            </b>

            <span>
              ${t(
                "اكتمل من النموذج",
                "form completed"
              )}
            </span>
          </div>

        </div>

        <div
          class="permissionNotice"
          style="margin-top:14px"
        >

          ${icon("eye-off")}

          <span>
            ${t(
              "النسبة النهائية للمشروع غير معروضة للمفتش",
              "Final project score is hidden from the inspector"
            )}
          </span>

        </div>

      </div>

    </div>

    <section class="section">

      <div class="formSection">

        <div class="sectionHead">

          <div>
            <h2>
              ${t(
                "المحور الأول",
                "Section One"
              )}
            </h2>

            <p>
              ${t(
                "الانضباط والإجراءات",
                "Discipline & Procedures"
              )}
            </p>
          </div>

          ${badge(
            t(
              "4 بنود",
              "4 items"
            ),
            "info"
          )}

        </div>

        ${inspectionQuestion(
          "a",
          t(
            "سلامة بوابات الدخول",
            "Entrance gate safety"
          ),
          t(
            "التأكد من الإغلاق وعمل أنظمة التحكم",
            "Verify gate security and access control"
          ),
          10
        )}

        ${inspectionQuestion(
          "b",
          t(
            "اكتمال سجل الزوار",
            "Visitor log completeness"
          ),
          t(
            "تسجيل جميع الزوار والتحقق من الهوية",
            "Record all visitors and verify identity"
          ),
          20
        )}

        ${inspectionQuestion(
          "c",
          t(
            "جاهزية جهاز التفتيش",
            "Inspection device readiness"
          ),
          t(
            "حالة الجهاز قبل بداية الوردية",
            "Verify device readiness before shift"
          ),
          30
        )}

        ${inspectionQuestion(
          "d",
          t(
            "وضوح مخارج الطوارئ",
            "Emergency exit visibility"
          ),
          t(
            "عدم وجود عوائق وسلامة الإشارات",
            "No obstruction and signage is visible"
          ),
          40
        )}

      </div>

      ${
        Object.values(
          state.answers
        ).includes("fail")
          ? findingBuilder()
          : ""
      }

      <div class="grid2">

        <div class="card">

          <div class="cardHead">
            <div>
              <h3>
                ${t(
                  "الأدلة",
                  "Evidence"
                )}
              </h3>

              <p>
                ${t(
                  "صورة أو فيديو أو مستند مرتبط بالبند",
                  "Image video or document linked to the item"
                )}
              </p>
            </div>
          </div>

          <label
            style="
              min-height:130px;
              display:grid;
              place-items:center;
              text-align:center;
              border:
                1px dashed
                rgba(114,185,214,.24);
              border-radius:17px;
              color:var(--muted);
              cursor:pointer
            "
          >

            <div>
              ${icon("cloud-upload")}

              <b
                style="
                  display:block;
                  color:#dce8ed;
                  font-size:9px;
                  margin-top:6px
                "
              >
                ${t(
                  "رفع دليل",
                  "Upload evidence"
                )}
              </b>

              <span
                style="
                  display:block;
                  font-size:7px;
                  margin-top:3px
                "
              >
                JPG · PNG · MP4 · MOV · PDF
              </span>
            </div>

            <input
              type="file"
              hidden
              onchange="
                toast(
                  t(
                    'تمت إضافة المرفق إلى الديمو',
                    'Attachment added to demo'
                  )
                )
              "
            >

          </label>

        </div>

        <div class="card">

          <div class="cardHead">
            <div>
              <h3>
                ${t(
                  "الحراس الموجودون",
                  "Guards present"
                )}
              </h3>

              <p>
                ${t(
                  "تقييم مستقل عن تقييم الموقع",
                  "Separate from site evaluation"
                )}
              </p>
            </div>
          </div>

          <div class="list">

            ${listItem(
              "shield",
              t(
                "محمد العتيبي",
                "Mohammed Al Otaibi"
              ),
              "EMP-1042",
              `
                <button
                  class="button"
                  onclick="guardEvaluationModal()"
                >
                  ${t(
                    "تقييم",
                    "Evaluate"
                  )}
                </button>
              `
            )}

            ${listItem(
              "shield",
              t(
                "سعد القحطاني",
                "Saad Al Qahtani"
              ),
              "EMP-1088",
              `
                <button
                  class="button"
                  onclick="guardEvaluationModal()"
                >
                  ${t(
                    "تقييم",
                    "Evaluate"
                  )}
                </button>
              `
            )}

          </div>

        </div>

      </div>

      <div
        class="heroActionRow"
        style="
          justify-content:flex-end;
          margin-top:15px
        "
      >

        <button
          class="button"
          onclick="
            toast(
              t(
                'تم حفظ المسودة',
                'Draft saved'
              )
            )
          "
        >
          ${icon("save")}
          ${t(
            "حفظ مسودة",
            "Save Draft"
          )}
        </button>

        <button
          class="button primary"
          onclick="submitInspection()"
        >
          ${icon("send")}
          ${t(
            "إرسال للمراجعة",
            "Submit for Review"
          )}
        </button>

      </div>

    </section>
  `;
}

function findingBuilder() {
  return `
    <div class="findingBuilder">

      <div class="sectionHead">

        <div>
          <h2>
            ${t(
              "إنشاء ملاحظة من البند غير المطابق",
              "Create Finding from Non-compliant Item"
            )}
          </h2>

          <p>
            ${t(
              "التصنيف والخطورة يحددان المعالجة والتصعيد",
              "Type and severity determine treatment and escalation"
            )}
          </p>
        </div>

        ${badge(
          t(
            "مطلوب",
            "Required"
          ),
          "danger"
        )}

      </div>

      <div class="formGrid">

        <div class="field">

          <label>
            ${t(
              "نوع الملاحظة",
              "Finding type"
            )}
          </label>

          <select class="input">

            <option>
              ${t(
                "حالة فورية",
                "Immediate case"
              )}
            </option>

            <option>
              ${t(
                "معالجة خلال مدة محددة",
                "Time-bound case"
              )}
            </option>

            <option>
              ${t(
                "تحسين طويل المدى",
                "Long-term improvement"
              )}
            </option>

          </select>

        </div>

        <div class="field">

          <label>
            ${t(
              "الخطورة",
              "Severity"
            )}
          </label>

          <select class="input">

            <option>
              ${t(
                "حرجة",
                "Critical"
              )}
            </option>

            <option>
              ${t(
                "عالية",
                "High"
              )}
            </option>

            <option>
              ${t(
                "متوسطة",
                "Medium"
              )}
            </option>

            <option>
              ${t(
                "منخفضة",
                "Low"
              )}
            </option>

          </select>

        </div>

      </div>

      <div
        class="permissionNotice"
        style="margin-top:10px"
      >

        ${icon("siren")}

        <span>
          ${t(
            "إذا كانت الحالة حرجة يتم إرسال إشعار فوري لإدارة المشروع عند تسجيلها",
            "Critical findings trigger an immediate Project Management notification"
          )}
        </span>

      </div>

    </div>
  `;
}

function answerQuestion(
  id,
  answer
) {
  state.answers[id] =
    answer;

  render();
}

function submitInspection() {
  toast(
    t(
      "تم إرسال التفتيش للمراجعة وتثبيت إصدار النموذج والنتيجة داخليًا",
      "Inspection submitted and form version plus calculated result were frozen internally"
    )
  );

  setTimeout(
    () => {
      go(
        state.role ===
          "inspector"
          ? "my_reports"
          : "review"
      );
    },
    700
  );
}

function guardEvaluationModal() {
  modal(`
    <h2>
      ${t(
        "تقييم الحارس",
        "Guard Evaluation"
      )}
    </h2>

    <p
      style="
        color:var(--muted);
        font-size:9px
      "
    >
      ${t(
        "محمد العتيبي · EMP-1042 · مرتبط بالزيارة VIS-2026-000123",
        "Mohammed Al Otaibi · EMP-1042 · linked to VIS-2026-000123"
      )}
    </p>

    <div class="formGrid">

      <div class="field">
        <label>
          ${t(
            "الانضباط",
            "Discipline"
          )}
        </label>

        <input
          class="input"
          type="number"
          value="95"
        >
      </div>

      <div class="field">
        <label>
          ${t(
            "اتباع الإجراءات",
            "Procedure compliance"
          )}
        </label>

        <input
          class="input"
          type="number"
          value="90"
        >
      </div>

      <div class="field span2">

        <label>
          ${t(
            "الملاحظات",
            "Notes"
          )}
        </label>

        <textarea class="input">${t(
          "التزام جيد مع ملاحظة بسيطة في تسليم الوردية",
          "Good compliance with a minor shift handover note"
        )}</textarea>

      </div>

    </div>

    <button
      class="button primary"
      onclick="
        toast(
          t(
            'تم حفظ تقييم الحارس',
            'Guard evaluation saved'
          )
        );
        closeModal()
      "
    >
      ${t(
        "حفظ التقييم",
        "Save Evaluation"
      )}
    </button>
  `);
}

function reviewPage() {
  return `
    ${pageIntro(
      "REVIEW QUEUE",
      t(
        "المراجعات والاعتمادات",
        "Reviews & Approvals"
      ),
      t(
        "لا يحتاج المراجع للبحث في النظام فكل التقارير التي تنتظر قراره موجودة هنا",
        "The reviewer does not need to search the system because everything awaiting a decision is gathered here"
      )
    )}

    ${routeStrip(2)}

    <div class="grid2">

      <div class="card">

        <div class="cardHead">

          <div>
            <h3>
              REP-2026-000094
            </h3>

            <p>
              ${projectName(
                "P-001"
              )}
              ·
              VIS-2026-000123
            </p>
          </div>

          ${badge(
            t(
              "بانتظار المراجعة",
              "Pending Review"
            ),
            "warning"
          )}

        </div>

        <div class="statRow">

          ${statBox(
            "v2.4",
            t(
              "النموذج",
              "Form"
            )
          )}

          ${statBox(
            "1",
            t(
              "ملاحظة",
              "Finding"
            )
          )}

          ${statBox(
            "2",
            t(
              "مرفقات",
              "Evidence"
            )
          )}

          ${statBox(
            "10:31",
            t(
              "وقت الإرسال",
              "Submitted"
            )
          )}

        </div>

        <div class="heroActionRow">

          <button
            class="button"
            onclick="returnReport()"
          >
            ${icon("undo-2")}
            ${t(
              "إعادة للاستكمال",
              "Return"
            )}
          </button>

          ${
            state.role ===
              "quality_admin"
              ? `
                <button
                  class="button danger"
                  onclick="rejectReport()"
                >
                  ${icon("ban")}
                  ${t(
                    "رفض",
                    "Reject"
                  )}
                </button>

                <button
                  class="button primary"
                  onclick="approveReport()"
                >
                  ${icon("badge-check")}
                  ${t(
                    "اعتماد",
                    "Approve"
                  )}
                </button>
              `
              : ""
          }

        </div>

      </div>

      <div class="card">

        <div class="cardHead">
          <div>
            <h3>
              ${t(
                "الأدلة",
                "Evidence"
              )}
            </h3>

            <p>
              ${t(
                "الأدلة المرتبطة بالملاحظة",
                "Evidence linked to the finding"
              )}
            </p>
          </div>
        </div>

        <div class="list">

          ${listItem(
            "image",
            "IMG-0041.jpg",
            t(
              "بوابة الطوارئ · 10:18",
              "Emergency Gate · 10:18"
            ),
            badge(
              t(
                "صورة",
                "Image"
              ),
              "info"
            )
          )}

          ${listItem(
            "video",
            "VID-0022.mp4",
            t(
              "فيديو قصير · 00:34",
              "Short video · 00:34"
            ),
            badge(
              t(
                "فيديو",
                "Video"
              ),
              "info"
            )
          )}

        </div>

      </div>

    </div>

    <section class="section">

      <div class="card">

        <div class="cardHead">
          <div>
            <h3>
              ${t(
                "السجل التاريخي",
                "Decision History"
              )}
            </h3>

            <p>
              ${t(
                "بيانات كل قرار تحفظ كما كانت وقت اتخاذه",
                "Decision-maker data is frozen exactly as it was at decision time"
              )}
            </p>
          </div>
        </div>

        <div class="list">

          ${listItem(
            "send",
            t(
              "إرسال التقرير",
              "Report submitted"
            ),
            t(
              "خالد السالم · مفتش جودة · 10:31",
              "Khaled Al Salem · Quality Inspector · 10:31"
            )
          )}

          ${listItem(
            "eye",
            t(
              "بدء المراجعة",
              "Review started"
            ),
            t(
              "سارة محمد · موظف جودة · 10:40",
              "Sarah Mohammed · Quality Officer · 10:40"
            )
          )}

        </div>

      </div>

    </section>
  `;
}

function decisionReasonModal(
  type
) {
  modal(`
    <h2>
      ${
        type === "return"
          ? t(
              "إعادة للاستكمال",
              "Return for Completion"
            )
          : t(
              "رفض التقرير",
              "Reject Report"
            )
      }
    </h2>

    <div class="field">

      <label>
        ${t(
          "السبب إلزامي",
          "Reason is mandatory"
        )}
      </label>

      <textarea
        id="decisionReason"
        class="input"
        placeholder="${t(
          "اكتب سبب القرار",
          "Enter decision reason"
        )}"
      ></textarea>

    </div>

    <button
      class="
        button
        ${
          type === "return"
            ? "primary"
            : "danger"
        }
      "
      onclick="
        confirmDecision(
          '${type}'
        )
      "
    >
      ${t(
        "تأكيد القرار",
        "Confirm Decision"
      )}
    </button>
  `);
}

function returnReport() {
  decisionReasonModal(
    "return"
  );
}

function rejectReport() {
  decisionReasonModal(
    "reject"
  );
}

function confirmDecision(
  type
) {
  const reason =
    document.querySelector(
      "#decisionReason"
    )?.value.trim();

  if (!reason) {
    toast(
      t(
        "اكتب سبب القرار أولًا",
        "Enter the reason first"
      )
    );

    return;
  }

  toast(
    type === "return"
      ? t(
          "تمت إعادة التقرير للمفتش",
          "Report returned to inspector"
        )
      : t(
          "تم رفض التقرير",
          "Report rejected"
        )
  );

  closeModal();
}

function approveReport() {
  modal(`
    <h2>
      ${t(
        "تم اعتماد التقرير",
        "Report Approved"
      )}
    </h2>

    <div class="permissionNotice">

      ${icon("badge-check")}

      <span>
        ${t(
          "سيتم حفظ اسم المعتمد ومسمّاه الوظيفي وتاريخ ووقت القرار داخل التقرير بصورة تاريخية",
          "Approver name job title date and decision time will be frozen in the report history"
        )}
      </span>

    </div>

    <div
      class="statRow"
      style="margin-top:14px"
    >

      ${statBox(
        t(
          "نورة العتيبي",
          "Noura Al Otaibi"
        ),
        t(
          "المعتمد",
          "Approver"
        )
      )}

      ${statBox(
        t(
          "مديرة الجودة",
          "Quality Manager"
        ),
        t(
          "المسمى",
          "Title"
        )
      )}

      ${statBox(
        "10:46",
        t(
          "الوقت",
          "Time"
        )
      )}

      ${statBox(
        "04 Oct",
        t(
          "التاريخ",
          "Date"
        )
      )}

    </div>

    <button
      class="button primary"
      style="margin-top:14px"
      onclick="
        toast(
          t(
            'تم حفظ الاعتماد وإشعار المفتش',
            'Approval saved and inspector notified'
          )
        );
        closeModal()
      "
    >
      ${t(
        "تم",
        "Done"
      )}
    </button>
  `);
}

function actionsPage() {
  return `
    ${pageIntro(
      "FINDINGS & ACTIONS",
      t(
        "الملاحظات والإجراءات التصحيحية",
        "Findings & Corrective Actions"
      ),
      t(
        "الملاحظة تبدأ من بند غير مطابق ثم تتحول لمسار معالجة واضح حتى الإغلاق أو التصعيد",
        "A finding starts from a non-compliant item and follows a clear treatment path through closure or escalation"
      )
    )}

    ${routeStrip(3)}

    <div class="escalationPath">

      <div class="escalationStage yellow">
        <span>3</span>
        <b>
          ${t(
            "تصعيد أصفر",
            "Yellow Escalation"
          )}
        </b>
        <small>
          ${t(
            "إشعار وبريد للمسؤول وإدارة المشروع",
            "Notification and email to owner and Project Management"
          )}
        </small>
      </div>

      <div class="escalationStage orange">
        <span>6</span>
        <b>
          ${t(
            "تصعيد برتقالي",
            "Orange Escalation"
          )}
        </b>
        <small>
          ${t(
            "بريد متابعة جديد وزيادة مستوى التنبيه",
            "Follow-up email and increased alert level"
          )}
        </small>
      </div>

      <div class="escalationStage red">
        <span>9</span>
        <b>
          ${t(
            "تصعيد أحمر",
            "Red Escalation"
          )}
        </b>
        <small>
          ${t(
            "تصعيد شديد مع إشعار جديد",
            "Critical escalation with a new alert"
          )}
        </small>
      </div>

      <div class="escalationStage senior">
        <span>
          ${icon("building-2")}
        </span>
        <b>
          ${t(
            "الإدارة العليا",
            "Senior Management"
          )}
        </b>
        <small>
          ${t(
            "التصعيد النهائي بعد المرحلة الحمراء",
            "Final escalation after the red stage"
          )}
        </small>
      </div>

    </div>

    <section class="section">

      <div class="permissionNotice">

        ${icon("calendar-clock")}

        <span>
          ${t(
            "في الديمو يبدأ العد من تسجيل الملاحظة وبأيام تقويمية وهذا القرار سيُثبت نهائيًا قبل التنفيذ هل يكون من تاريخ التسجيل أو الاستحقاق وهل هي أيام عمل أو أيام تقويمية",
            "The demo currently counts from finding creation using calendar days. Final production rules will be approved before implementation"
          )}
        </span>

      </div>

    </section>

    <section class="section">

      <div class="card">

        <div class="tableWrap">

          <table>

            <thead>
              <tr>
                <th>المرجع</th>
                <th>الملاحظة</th>
                <th>التصنيف</th>
                <th>الخطورة</th>
                <th>العمر</th>
                <th>التصعيد</th>
                <th>الحالة</th>
                <th></th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>CAPA-2026-0041</td>
                <td>${t("بوابة الطوارئ","Emergency gate")}</td>
                <td>${t("حالة فورية","Immediate")}</td>
                <td>${badge(t("حرجة","Critical"),"danger")}</td>
                <td>10 ${t("أيام","days")}</td>
                <td>${badge(t("أحمر","Red"),"danger")}</td>
                <td>${badge(t("متأخر","Overdue"),"danger")}</td>
                <td>
                  <button
                    class="button"
                    onclick="actionDetails()"
                  >
                    ${t(
                      "فتح",
                      "Open"
                    )}
                  </button>
                </td>
              </tr>

              <tr>
                <td>CAPA-2026-0044</td>
                <td>${t("سجل الزوار","Visitor log")}</td>
                <td>${t("مدة محددة","Time-bound")}</td>
                <td>${badge(t("متوسطة","Medium"),"info")}</td>
                <td>4 ${t("أيام","days")}</td>
                <td>${badge(t("أصفر","Yellow"),"warning")}</td>
                <td>${badge(t("قيد المعالجة","In Progress"),"info")}</td>
                <td>
                  <button
                    class="button"
                    onclick="actionDetails()"
                  >
                    ${t(
                      "فتح",
                      "Open"
                    )}
                  </button>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </section>
  `;
}

function actionDetails() {
  modal(`
    <h2>
      CAPA-2026-0041
    </h2>

    ${routeStrip(4)}

    <div class="statRow">

      ${statBox(
        t(
          "حرجة",
          "Critical"
        ),
        t(
          "الخطورة",
          "Severity"
        )
      )}

      ${statBox(
        "9",
        t(
          "أيام",
          "Days"
        )
      )}

      ${statBox(
        t(
          "أحمر",
          "Red"
        ),
        t(
          "التصعيد",
          "Escalation"
        )
      )}

      ${statBox(
        t(
          "متأخر",
          "Overdue"
        ),
        t(
          "الحالة",
          "Status"
        )
      )}

    </div>

    <div
      class="list"
      style="margin-top:14px"
    >

      ${listItem(
        "triangle-alert",
        t(
          "تسجيل الملاحظة",
          "Finding registered"
        ),
        "04 Oct · 10:21"
      )}

      ${listItem(
        "user-round",
        t(
          "إسناد المعالجة",
          "Treatment assigned"
        ),
        t(
          "إدارة المشروع",
          "Project Management"
        )
      )}

      ${listItem(
        "mail",
        t(
          "إرسال بريد التصعيد",
          "Escalation email sent"
        ),
        t(
          "مرحلة 3 و6 و9 أيام",
          "Day 3 6 and 9 stages"
        )
      )}

      ${listItem(
        "cloud-upload",
        t(
          "رفع دليل المعالجة",
          "Treatment evidence uploaded"
        ),
        t(
          "بانتظار مراجعة الجودة",
          "Awaiting Quality review"
        )
      )}

    </div>
  `);
}

function analyticsPage() {
  const visibleProjects =
    state.role ===
      "project_manager"
      ? projects.filter(
          p => p.id ===
            "P-001"
        )
      : projects;

  const totalEmployees =
    visibleProjects.reduce(
      (
        total,
        p
      ) =>
        total +
        p.employees,
      0
    );

  const totalFindings =
    visibleProjects.reduce(
      (
        total,
        p
      ) =>
        total +
        p.findings,
      0
    );

  const ratio =
    (
      totalFindings /
      totalEmployees *
      100
    ).toFixed(1);

  return `
    ${pageIntro(
      "INTERNAL ANALYTICS",
      t(
        "التحليلات داخل النظام",
        "In-app Analytics"
      ),
      t(
        "بدون Power BI أو اشتراك تحليل إضافي",
        "No Power BI or additional analytics subscription"
      )
    )}

    <div class="metricGrid">

      ${statBox(
        "88%",
        t(
          "متوسط الالتزام",
          "Average compliance"
        )
      )}

      ${statBox(
        ratio + "%",
        t(
          "الملاحظات إلى الموظفين",
          "Findings / employees"
        )
      )}

      ${statBox(
        "4.5",
        t(
          "متوسط أيام الإغلاق",
          "Average closure days"
        )
      )}

      ${statBox(
        "7",
        t(
          "الشكاوى",
          "Complaints"
        )
      )}

      ${statBox(
        "17",
        t(
          "يوم لأقرب عقد",
          "days to nearest contract"
        )
      )}

    </div>

    <section class="section">

      <div class="grid2">

        <div class="card">

          <div class="cardHead">

            <div>
              <h3>
                ${t(
                  "اتجاه التحسن",
                  "Improvement Trend"
                )}
              </h3>

              <p>
                ${t(
                  "يومي وأسبوعي وشهري وسنوي",
                  "Daily weekly monthly and yearly"
                )}
              </p>
            </div>

          </div>

          <div class="chartBox">

            ${[
              63,
              69,
              74,
              78,
              85,
              92
            ]
              .map(
                (
                  value,
                  index
                ) => {
                  const ar =
                    [
                      "مايو",
                      "يونيو",
                      "يوليو",
                      "أغسطس",
                      "سبتمبر",
                      "أكتوبر"
                    ];

                  const en =
                    [
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct"
                    ];

                  return `
                    <div class="chartColumn">

                      <div
                        class="
                          chartBar
                          ${
                            index === 5
                              ? "gold"
                              : ""
                          }
                        "
                        style="
                          height:${value}%
                        "
                      ></div>

                      <span>
                        ${t(
                          ar[index],
                          en[index]
                        )}
                      </span>

                    </div>
                  `;
                }
              )
              .join("")}

          </div>

        </div>

        <div class="card">

          <div class="cardHead">

            <div>
              <h3>
                ${t(
                  "المؤشرات التشغيلية",
                  "Operational Metrics"
                )}
              </h3>

            </div>

          </div>

          <div class="list">

            ${listItem(
              "timer",
              t(
                "متوسط مدة إغلاق الحالات",
                "Average closure time"
              ),
              "4.5 " +
                t(
                  "يوم",
                  "days"
                ),
              badge(
                "-0.8",
                "success"
              )
            )}

            ${listItem(
              "users",
              t(
                "الملاحظات لكل 100 موظف",
                "Findings per 100 employees"
              ),
              ratio + "%",
              badge(
                t(
                  "متابعة",
                  "Monitor"
                ),
                "info"
              )
            )}

            ${listItem(
              "message-square-warning",
              t(
                "الشكاوى",
                "Complaints"
              ),
              "7",
              badge(
                "-2",
                "success"
              )
            )}

            ${listItem(
              "calendar-clock",
              t(
                "قرب انتهاء العقود",
                "Contract expiry"
              ),
              t(
                "مشروع بوابة النخيل · 17 يوم",
                "Palm Gate · 17 days"
              ),
              badge(
                t(
                  "قريب",
                  "Soon"
                ),
                "danger"
              )
            )}

          </div>

        </div>

      </div>

    </section>

    <section class="section">

      <div class="card">

        <div class="cardHead">

          <div>
            <h3>
              ${t(
                "ترتيب المشاريع",
                "Project Ranking"
              )}
            </h3>

            <p>
              ${t(
                "حسب الملاحظات والتحسن والشكاوى والمدة",
                "By findings improvement complaints and closure time"
              )}
            </p>
          </div>

        </div>

        <div class="tableWrap">

          <table>

            <thead>
              <tr>
                <th>المشروع</th>
                <th>التقييم</th>
                <th>الملاحظات</th>
                <th>النسبة للموظفين</th>
                <th>مدة الإغلاق</th>
                <th>التحسن</th>
                <th>الشكاوى</th>
                <th>العقد</th>
              </tr>
            </thead>

            <tbody>

              ${visibleProjects
                .map(p => {
                  return `
                    <tr>

                      <td>
                        ${
                          state.lang ===
                          "ar"
                            ? p.ar
                            : p.en
                        }
                      </td>

                      <td>
                        ${p.score}/100
                      </td>

                      <td>
                        ${p.findings}
                      </td>

                      <td>
                        ${(
                          p.findings /
                          p.employees *
                          100
                        ).toFixed(1)}%
                      </td>

                      <td>
                        ${p.closeDays}
                        ${t(
                          "يوم",
                          "days"
                        )}
                      </td>

                      <td>
                        +${p.improvement}%
                      </td>

                      <td>
                        ${p.complaints}
                      </td>

                      <td>
                        ${badge(
                          p.contractDays +
                            " " +
                            t(
                              "يوم",
                              "days"
                            ),
                          p.contractDays <
                            30
                            ? "danger"
                            : "warning"
                        )}
                      </td>

                    </tr>
                  `;
                })
                .join("")}

            </tbody>

          </table>

        </div>

      </div>

    </section>
  `;
}

function reportsPage() {
  return `
    ${pageIntro(
      "REPORTS",
      t(
        "التقارير",
        "Reports"
      ),
      t(
        "التقرير هو نتيجة الزيارة الرسمية ويحتوي على كل القرارات والأدلة والملاحظات المرتبطة بها",
        "The report is the official visit output containing decisions evidence and related findings"
      )
    )}

    ${routeStrip(2)}

    <div class="card">

      <div class="tableWrap">

        <table>

          <thead>
            <tr>
              <th>التقرير</th>
              <th>المشروع</th>
              <th>الزيارة</th>
              <th>الحالة</th>
              <th>المعتمد</th>
              <th>التاريخ</th>
              <th></th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>REP-2026-000094</td>
              <td>${projectName("P-001")}</td>
              <td>VIS-2026-000123</td>
              <td>${badge(t("معتمد","Approved"),"success")}</td>
              <td>${t("نورة العتيبي","Noura Al Otaibi")}</td>
              <td>04 Oct</td>
              <td>
                <button
                  class="button"
                  onclick="reportPreview()"
                >
                  ${t(
                    "فتح",
                    "Open"
                  )}
                </button>
              </td>
            </tr>

            ${
              state.role !==
                "project_manager"
                ? `
                  <tr>
                    <td>REP-2026-000091</td>
                    <td>${projectName("P-002")}</td>
                    <td>VIS-2026-000119</td>
                    <td>${badge(t("بانتظار المراجعة","Pending Review"),"warning")}</td>
                    <td>—</td>
                    <td>02 Oct</td>
                    <td>
                      <button
                        class="button"
                        onclick="reportPreview()"
                      >
                        ${t(
                          "فتح",
                          "Open"
                        )}
                      </button>
                    </td>
                  </tr>
                `
                : ""
            }

          </tbody>

        </table>

      </div>

    </div>
  `;
}

function myReportsPage() {
  return `
    ${pageIntro(
      "MY REPORTS",
      t(
        "تقاريري",
        "My Reports"
      ),
      t(
        "يعرض المفتش تقارير الزيارات التي نفذها هو فقط دون نتائج المشاريع العامة",
        "Inspectors see only reports from their own assigned visits without project-wide analytics"
      )
    )}

    <div class="card">

      <div class="list">

        ${listItem(
          "file-check-2",
          "REP-2026-000094",
          t(
            "زيارة VIS-000123 · معتمد",
            "VIS-000123 · Approved"
          ),
          `
            <button
              class="button"
              onclick="reportPreview()"
            >
              ${t(
                "فتح",
                "Open"
              )}
            </button>
          `
        )}

        ${listItem(
          "undo-2",
          "REP-2026-000089",
          t(
            "زيارة VIS-000115 · معاد للاستكمال",
            "VIS-000115 · Returned"
          ),
          `
            <button
              class="button"
              onclick="go('returned')"
            >
              ${t(
                "استكمال",
                "Complete"
              )}
            </button>
          `
        )}

      </div>

    </div>
  `;
}

function reportPreview() {
  modal(`
    <h2>
      REP-2026-000094
    </h2>

    ${routeStrip(2)}

    <div class="statRow">

      ${statBox(
        "92/100",
        t(
          "تقييم المشروع",
          "Project score"
        )
      )}

      ${statBox(
        t(
          "معتمد",
          "Approved"
        ),
        t(
          "الحالة",
          "Status"
        )
      )}

      ${statBox(
        "v2.4",
        t(
          "إصدار النموذج",
          "Form version"
        )
      )}

      ${statBox(
        "v2",
        t(
          "إصدار التقرير",
          "Report version"
        )
      )}

    </div>

    <div
      class="card"
      style="margin-top:14px"
    >

      <div class="cardHead">
        <div>
          <h3>
            ${t(
              "بيانات القرار",
              "Decision Snapshot"
            )}
          </h3>
        </div>
      </div>

      <div class="grid2">

        ${listItem(
          "user-round-check",
          t(
            "نورة العتيبي",
            "Noura Al Otaibi"
          ),
          t(
            "مديرة قسم الجودة",
            "Quality Department Manager"
          )
        )}

        ${listItem(
          "calendar-clock",
          "04 Oct · 10:46",
          t(
            "تاريخ ووقت القرار",
            "Decision date and time"
          )
        )}

      </div>

      <div
        class="permissionNotice"
        style="margin-top:12px"
      >

        ${icon("file-check-2")}

        <span>
          ${t(
            "التقرير يتضمن البنود والإجابات والأوزان والأدلة والملاحظات والإجراءات التصحيحية وبيانات القرار",
            "Report includes items answers weights evidence findings corrective actions and decision data"
          )}
        </span>

      </div>

      <button
        class="button primary"
        style="margin-top:13px"
        onclick="
          toast(
            t(
              'تنزيل PDF متاح حسب صلاحية الحساب',
              'PDF download allowed under current permission'
            )
          )
        "
      >
        ${icon("download")}
        ${t(
          "تنزيل التقرير المعتمد",
          "Download Approved PDF"
        )}
      </button>

    </div>
  `);
}

function returnedPage() {
  return `
    ${pageIntro(
      "RETURNED WORK",
      t(
        "المعاد إليك للاستكمال",
        "Returned for Completion"
      ),
      t(
        "بدل البحث عن التقرير يظهر للمفتش مباشرة ما الذي يجب استكماله",
        "Returned work clearly explains exactly what needs to be completed"
      )
    )}

    <div class="card">

      <div class="cardHead">

        <div>
          <h3>
            REP-2026-000089
          </h3>

          <p>
            VIS-2026-000115
          </p>
        </div>

        ${badge(
          t(
            "معاد للاستكمال",
            "Returned"
          ),
          "warning"
        )}

      </div>

      <div class="permissionNotice">

        ${icon("message-square-more")}

        <span>
          ${t(
            "سبب الإعادة مطلوب إرفاق صورة واضحة لبوابة الطوارئ واستكمال ملاحظة البند رقم 12",
            "Return reason: upload a clear Emergency Gate image and complete item 12 notes"
          )}
        </span>

      </div>

      <div
        class="heroActionRow"
        style="margin-top:14px"
      >

        <button
          class="button primary"
          onclick="go('inspection')"
        >
          ${icon("pencil")}
          ${t(
            "استكمال التقرير",
            "Complete Report"
          )}
        </button>

      </div>

    </div>
  `;
}

function guardsPage() {
  return `
    ${pageIntro(
      "GUARD TEAM",
      t(
        "الحراس والتقييم",
        "Guards & Evaluation"
      ),
      t(
        "كل حارس له سجل واحد يجمع التقييمات والملاحظات والتدريب",
        "Each guard has one record containing evaluations findings and training"
      )
    )}

    <div class="card">

      <div class="list">

        ${listItem(
          "shield",
          t(
            "محمد العتيبي",
            "Mohammed Al Otaibi"
          ),
          t(
            "EMP-1042 · آخر تقييم 92%",
            "EMP-1042 · Last score 92%"
          ),
          `
            <button
              class="button"
              onclick="guardRecord()"
            >
              ${t(
                "فتح السجل",
                "Open"
              )}
            </button>
          `
        )}

        ${listItem(
          "shield",
          t(
            "سعد القحطاني",
            "Saad Al Qahtani"
          ),
          t(
            "EMP-1088 · آخر تقييم 86%",
            "EMP-1088 · Last score 86%"
          ),
          `
            <button
              class="button"
              onclick="guardRecord()"
            >
              ${t(
                "فتح السجل",
                "Open"
              )}
            </button>
          `
        )}

      </div>

    </div>
  `;
}

function guardRecord() {
  modal(`
    <h2>
      ${t(
        "محمد العتيبي",
        "Mohammed Al Otaibi"
      )}
    </h2>

    <p
      style="
        color:var(--muted);
        font-size:9px
      "
    >
      EMP-1042
      ·
      ${projectName(
        "P-001"
      )}
    </p>

    <div class="statRow">

      ${statBox(
        "92%",
        t(
          "آخر تقييم",
          "Last evaluation"
        )
      )}

      ${statBox(
        "14",
        t(
          "تقييمًا",
          "Evaluations"
        )
      )}

      ${statBox(
        "1",
        t(
          "ملاحظة متكررة",
          "Repeated finding"
        )
      )}

      ${statBox(
        "2",
        t(
          "دورات",
          "Trainings"
        )
      )}

    </div>

    <div
      class="heroActionRow"
      style="margin-top:14px"
    >

      <button
        class="button primary"
        onclick="guardEvaluationModal()"
      >
        ${icon("user-round-check")}
        ${t(
          "تقييم جديد",
          "New Evaluation"
        )}
      </button>

      <button
        class="button"
        onclick="
          closeModal();
          go('training')
        "
      >
        ${icon("graduation-cap")}
        ${t(
          "طلب تدريب",
          "Training Request"
        )}
      </button>

    </div>
  `);
}

function trainingPage() {
  return `
    ${pageIntro(
      "TRAINING WORKFLOW",
      t(
        "طلبات التدريب",
        "Training Requests"
      ),
      t(
        "المسار واضح من مشرف الحراس إلى مدير المشروع ثم إدارة الجودة ثم إثبات الإتمام",
        "The workflow moves from Guard Supervisor to Project Manager then Quality and finally completion evidence"
      ),
      state.role ===
        "guard_supervisor"
        ? `
          <button
            class="button primary"
            onclick="trainingRequestModal()"
          >
            ${icon("plus")}
            ${t(
              "طلب دورة",
              "Request Training"
            )}
          </button>
        `
        : ""
    )}

    <div class="workflow">

      <div class="workflowItem active">
        <span>01</span>
        <b>
          ${t(
            "مشرف الحراس",
            "Guard Supervisor"
          )}
        </b>
        <small>
          ${t(
            "إنشاء الطلب",
            "Creates request"
          )}
        </small>
      </div>

      <div class="workflowItem">
        <span>02</span>
        <b>
          ${t(
            "مدير المشروع",
            "Project Manager"
          )}
        </b>
        <small>
          ${t(
            "موافقة أو إعادة أو رفض",
            "Approve return or reject"
          )}
        </small>
      </div>

      <div class="workflowItem">
        <span>03</span>
        <b>
          ${t(
            "إدارة الجودة",
            "Quality Management"
          )}
        </b>
        <small>
          ${t(
            "الاعتماد النهائي",
            "Final approval"
          )}
        </small>
      </div>

      <div class="workflowItem">
        <span>04</span>
        <b>
          ${t(
            "التنفيذ",
            "Completion"
          )}
        </b>
        <small>
          ${t(
            "رفع شهادة أو إثبات",
            "Upload certificate"
          )}
        </small>
      </div>

      <div class="workflowItem">
        <span>05</span>
        <b>
          ${t(
            "سجل الموظف",
            "Employee Record"
          )}
        </b>
        <small>
          ${t(
            "الحفظ التاريخي",
            "Historical record"
          )}
        </small>
      </div>

    </div>

    <section class="section">

      <div class="card">

        <div class="list">

          ${listItem(
            "graduation-cap",
            "TRN-2026-0018",
            t(
              "إدارة الحشود · محمد العتيبي",
              "Crowd Management · Mohammed Al Otaibi"
            ),
            badge(
              t(
                "بانتظار مدير المشروع",
                "Pending Project Manager"
              ),
              "warning"
            )
          )}

          ${listItem(
            "graduation-cap",
            "TRN-2026-0015",
            t(
              "الاستجابة للطوارئ · سعد القحطاني",
              "Emergency Response · Saad Al Qahtani"
            ),
            badge(
              t(
                "عند إدارة الجودة",
                "At Quality"
              ),
              "info"
            )
          )}

        </div>

      </div>

    </section>
  `;
}

function trainingRequestModal() {
  modal(`
    <h2>
      ${t(
        "طلب دورة تدريبية",
        "Training Request"
      )}
    </h2>

    <div class="formGrid">

      <div class="field">
        <label>
          ${t(
            "الحارس",
            "Guard"
          )}
        </label>

        <select class="input">
          <option>
            ${t(
              "محمد العتيبي",
              "Mohammed Al Otaibi"
            )}
          </option>
        </select>
      </div>

      <div class="field">
        <label>
          ${t(
            "الدورة",
            "Course"
          )}
        </label>

        <select class="input">
          <option>
            ${t(
              "إدارة الحشود",
              "Crowd Management"
            )}
          </option>

          <option>
            ${t(
              "الاستجابة للطوارئ",
              "Emergency Response"
            )}
          </option>
        </select>
      </div>

      <div class="field span2">
        <label>
          ${t(
            "سبب الطلب",
            "Reason"
          )}
        </label>

        <textarea class="input">${t(
          "ملاحظة متكررة ظهرت أثناء التقييم",
          "Repeated finding identified during evaluation"
        )}</textarea>
      </div>

    </div>

    <button
      class="button primary"
      onclick="
        toast(
          t(
            'تم إرسال الطلب لمدير المشروع',
            'Request sent to Project Manager'
          )
        );
        closeModal()
      "
    >
      ${t(
        "إرسال",
        "Submit"
      )}
    </button>
  `);
}

function formsPage() {
  return `
    ${pageIntro(
      "FORM VERSIONING",
      t(
        "النماذج والإصدارات",
        "Forms & Versions"
      ),
      t(
        "الإدارة تبني النماذج من داخل النظام والنموذج المنشور لا يتغير بل يتم إنشاء إصدار جديد",
        "Forms are managed in-system and published versions remain immutable while changes create new versions"
      )
    )}

    <div class="grid2">

      <div class="card">

        <div class="cardHead">

          <div>
            <h3>
              ${t(
                "نموذج التفتيش الدوري",
                "Routine Inspection Form"
              )}
            </h3>

            <p>
              ${t(
                "42 بندًا",
                "42 items"
              )}
            </p>
          </div>

          ${badge(
            t(
              "منشور",
              "Published"
            ),
            "success"
          )}

        </div>

        <div class="list">

          ${listItem(
            "git-branch",
            "v2.4",
            t(
              "الإصدار الحالي · مقفل",
              "Current version · locked"
            ),
            badge(
              t(
                "نشط",
                "Active"
              ),
              "success"
            )
          )}

          ${listItem(
            "archive",
            "v2.3",
            t(
              "استخدم في 28 زيارة",
              "Used in 28 visits"
            ),
            badge(
              t(
                "مؤرشف",
                "Archived"
              ),
              "neutral"
            )
          )}

        </div>

        <button
          class="button primary"
          style="margin-top:12px"
          onclick="
            toast(
              t(
                'تم إنشاء v2.5 كمسودة',
                'Created v2.5 as draft'
              )
            )
          "
        >
          ${icon("git-branch")}
          ${t(
            "إصدار جديد",
            "New Version"
          )}
        </button>

      </div>

      <div class="card">

        <div class="permissionNotice">

          ${icon("lock")}

          <span>
            ${t(
              "نتائج الزيارات القديمة لا تتغير عند تعديل النموذج لأن كل زيارة تحتفظ بنصوص البنود والأوزان والإصدار وقت التنفيذ",
              "Historical visit results never change because each visit stores the item text weights and form version used at execution time"
            )}
          </span>

        </div>

      </div>

    </div>
  `;
}

function permissionsPage() {
  return `
    ${pageIntro(
      "ACCESS CONTROL",
      t(
        "الصلاحيات ونطاق البيانات",
        "Permissions & Data Scope"
      ),
      t(
        "القالب يحدد الوظائف والمشروع يحدد نطاق البيانات والبلاغات الحساسة لها تصريح مستقل يملكه صاحب النظام فقط",
        "Role templates define functions project assignment defines data scope and sensitive access is an independent owner-controlled permission"
      )
    )}

    <div class="grid2">

      <div class="card">

        <div class="cardHead">
          <div>
            <h3>
              ${t(
                "قوالب الأدوار",
                "Role Templates"
              )}
            </h3>
          </div>
        </div>

        <div class="list">

          ${listItem(
            "badge-check",
            t(
              "إدارة الجودة",
              "Quality Management"
            ),
            t(
              "المشاريع والجدولة والمراجعة والاعتماد والتقارير",
              "Projects scheduling review approval and reports"
            )
          )}

          ${listItem(
            "scan-search",
            t(
              "مفتش الجودة",
              "Quality Inspector"
            ),
            t(
              "زياراته والتفتيش والأدلة وما يعاد إليه فقط",
              "Own visits inspection evidence and returned work only"
            )
          )}

          ${listItem(
            "briefcase-business",
            t(
              "مدير المشروع",
              "Project Manager"
            ),
            t(
              "المشروع المسند فقط",
              "Assigned project only"
            )
          )}

          ${listItem(
            "users-round",
            t(
              "مشرف الحراس",
              "Guard Supervisor"
            ),
            t(
              "التقييم وطلبات التدريب",
              "Evaluation and training requests"
            )
          )}

        </div>

      </div>

      <div class="card">

        <div class="cardHead">
          <div>
            <h3>
              ${t(
                "اختبار الحماية",
                "Access Test"
              )}
            </h3>
          </div>
        </div>

        <div class="permissionNotice">

          ${icon("shield-x")}

          <span>
            ${t(
              "في النظام النهائي لا يعتمد المنع على إخفاء الزر فقط بل يتم التحقق من الصلاحية والنطاق في الخادم عند كل رابط وبحث وتنزيل وتصدير",
              "Production access is enforced server-side for every direct URL search download and export rather than merely hiding interface buttons"
            )}
          </span>

        </div>

        <button
          class="button danger"
          style="margin-top:13px"
          onclick="accessDeniedDemo()"
        >
          ${icon("shield-x")}
          ${t(
            "محاولة فتح مشروع غير مصرح",
            "Try unauthorized project"
          )}
        </button>

      </div>

    </div>
  `;
}

function accessDeniedDemo() {
  modal(`
    <div
      style="
        text-align:center;
        padding:20px 0
      "
    >
      <div
        class="taskIcon red"
        style="
          margin:auto
        "
      >
        ${icon("shield-x")}
      </div>

      <h2
        style="
          padding:0;
          margin-top:17px
        "
      >
        403 · Access Denied
      </h2>

      <p
        style="
          color:var(--muted);
          font-size:9px;
          line-height:1.8
        "
      >
        ${t(
          "هذا الحساب لا يملك صلاحية الوصول إلى المشروع المطلوب حتى عند استخدام رابط مباشر",
          "This account cannot access the requested project even through a direct URL"
        )}
      </p>
    </div>
  `);
}

function sensitivePage() {
  if (
    state.role === "guard"
  ) {
    return guardSensitivePage();
  }

  return ownerSensitivePage();
}

function ownerSensitivePage() {
  return `
    ${pageIntro(
      "PRIVATE CHANNEL",
      t(
        "البلاغات الحساسة",
        "Sensitive Reports"
      ),
      t(
        "هذه الوحدة منفصلة عن باقي النظام ولا يحصل عليها أي دور تلقائيًا",
        "This module is isolated from the rest of the system and no role receives automatic access"
      )
    )}

    <div class="privateHero">

      ${icon("lock-keyhole")}

      <h2>
        ${t(
          "أنت من يحدد من يستطيع الدخول",
          "You decide who can access"
        )}
      </h2>

      <p>
        ${t(
          "إدارة الجودة ومدير المشروع والمشرف وموظف الجودة لا يحصلون على البلاغات الحساسة لمجرد مسماهم الوظيفي ولا يستطيع أي شخص منح نفسه أو غيره هذه الصلاحية",
          "Quality Management Project Managers Supervisors and Quality Officers do not receive sensitive access through their role and no user may grant it to themselves or others"
        )}
      </p>

    </div>

    <section class="section">

      <div class="grid2">

        <div class="card">

          <div class="cardHead">
            <div>
              <h3>
                ${t(
                  "الأشخاص المخولون",
                  "Authorized People"
                )}
              </h3>
            </div>
          </div>

          <div class="list">

            ${listItem(
              "crown",
              t(
                "سلطان",
                "Sultan"
              ),
              t(
                "مالك النظام",
                "System Owner"
              ),
              badge(
                t(
                  "مخول",
                  "Authorized"
                ),
                "success"
              )
            )}

          </div>

          <div
            class="field"
            style="margin-top:13px"
          >

            <label>
              ${t(
                "منح تصريح مستقل",
                "Grant independent access"
              )}
            </label>

            <select
              id="sensitiveRole"
              class="input"
            >

              <option value="quality_staff">
                ${t(
                  "موظف الجودة",
                  "Quality Officer"
                )}
              </option>

              <option value="project_manager">
                ${t(
                  "مدير المشروع",
                  "Project Manager"
                )}
              </option>

              <option value="inspector">
                ${t(
                  "مفتش الجودة",
                  "Quality Inspector"
                )}
              </option>

              <option value="guard_supervisor">
                ${t(
                  "مشرف الحراس",
                  "Guard Supervisor"
                )}
              </option>

            </select>

          </div>

          <div class="heroActionRow">

            <button
              class="button primary"
              onclick="grantSensitive()"
            >
              ${t(
                "منح",
                "Grant"
              )}
            </button>

            <button
              class="button danger"
              onclick="revokeSensitive()"
            >
              ${t(
                "سحب",
                "Revoke"
              )}
            </button>

          </div>

        </div>

        <div class="card">

          <div class="cardHead">
            <div>
              <h3>
                ${t(
                  "سجل الاطلاع المحمي",
                  "Protected Access Log"
                )}
              </h3>
            </div>
          </div>

          <div class="list">

            ${listItem(
              "eye",
              "SEC-2026-0012",
              t(
                "فتح بواسطة سلطان · 11:04",
                "Opened by Sultan · 11:04"
              )
            )}

            ${listItem(
              "message-square-more",
              t(
                "إضافة رد",
                "Reply added"
              ),
              t(
                "المحتوى لا يظهر في الإشعارات",
                "Sensitive content is excluded from notifications"
              )
            )}

          </div>

        </div>

      </div>

    </section>
  `;
}

function guardSensitivePage() {
  return `
    ${pageIntro(
      "PRIVATE REPORT",
      t(
        "قناة خاصة وآمنة",
        "Private & Secure Channel"
      ),
      t(
        "لا تستطيع مشاهدة بلاغات الآخرين وتتابع فقط ما أرسلته أنت",
        "You cannot view other users reports and can only track your own submissions"
      )
    )}

    <div class="grid2">

      <div class="card">

        <div class="field">

          <label>
            ${t(
              "نوع الطلب",
              "Type"
            )}
          </label>

          <select class="input">
            <option>
              ${t(
                "بلاغ حساس",
                "Sensitive Report"
              )}
            </option>

            <option>
              ${t(
                "شكوى",
                "Complaint"
              )}
            </option>

            <option>
              ${t(
                "استبيان",
                "Survey"
              )}
            </option>
          </select>

        </div>

        <div class="field">

          <label>
            ${t(
              "الموضوع",
              "Subject"
            )}
          </label>

          <input
            class="input"
            placeholder="${t(
              "عنوان مختصر",
              "Short subject"
            )}"
          >

        </div>

        <div class="field">

          <label>
            ${t(
              "التفاصيل",
              "Details"
            )}
          </label>

          <textarea
            class="input"
          ></textarea>

        </div>

        <button
          class="button primary"
          onclick="
            toast(
              t(
                'تم إرسال البلاغ إلى القناة الخاصة',
                'Report submitted to the private channel'
              )
            )
          "
        >
          ${icon("shield-check")}
          ${t(
            "إرسال بأمان",
            "Submit Securely"
          )}
        </button>

      </div>

      <div class="card">

        <div class="cardHead">
          <div>
            <h3>
              ${t(
                "بلاغاتي",
                "My Reports"
              )}
            </h3>
          </div>
        </div>

        <div class="list">

          ${listItem(
            "lock-keyhole",
            "SEC-2026-0012",
            t(
              "يوجد رد جديد",
              "New reply available"
            ),
            badge(
              t(
                "قيد المتابعة",
                "In Progress"
              ),
              "info"
            )
          )}

        </div>

      </div>

    </div>
  `;
}

function myServicesPage() {
  return guardSensitivePage();
}

function operationsPage() {
  return `
    ${pageIntro(
      "OPERATIONS & HANDOVER",
      t(
        "التشغيل والتسليم",
        "Operations & Handover"
      ),
      t(
        "كل ما يتعلق بالملكية والاستضافة والنسخ والدعم والتسليم النهائي يظهر هنا بشكل واضح",
        "Ownership hosting backups support and final handover are summarized clearly here"
      )
    )}

    <div class="grid2">

      <div class="card">

        <div class="cardHead">
          <div>
            <h3>
              ${t(
                "مدة التنفيذ",
                "Implementation Duration"
              )}
            </h3>
          </div>
        </div>

        <div class="statRow">

          ${statBox(
            "25–30",
            t(
              "مرحلة أولى",
              "Phase 1 days"
            )
          )}

          ${statBox(
            "20–25",
            t(
              "مرحلة ثانية",
              "Phase 2 days"
            )
          )}

          ${statBox(
            "45–55",
            t(
              "إجمالي أيام العمل",
              "Total working days"
            )
          )}

          ${statBox(
            "60",
            t(
              "يوم ضمان أخطاء",
              "Warranty days"
            )
          )}

        </div>

      </div>

      <div class="card">

        <div class="cardHead">
          <div>
            <h3>
              ${t(
                "التكاليف التشغيلية",
                "Operating Costs"
              )}
            </h3>

            <p>
              ${t(
                "لا تفعل أي خدمة مدفوعة قبل موافقة العميل",
                "No paid service is activated without approval"
              )}
            </p>
          </div>
        </div>

        <div class="list">

          ${listItem(
            "server",
            t(
              "الاستضافة",
              "Hosting"
            ),
            t(
              "تحدد قبل الشراء حسب السعة والأداء",
              "Quoted before purchase according to capacity"
            )
          )}

          ${listItem(
            "mail",
            t(
              "البريد",
              "Email"
            ),
            t(
              "SMTP للتفعيل والتنبيهات والتصعيد",
              "SMTP for activation notifications and escalation"
            )
          )}

          ${listItem(
            "hard-drive",
            t(
              "التخزين والنسخ",
              "Storage & Backup"
            ),
            t(
              "حسب حجم الصور والفيديو وسياسة الاحتفاظ",
              "Based on media volume and retention policy"
            )
          )}

          ${listItem(
            "chart-no-axes-combined",
            t(
              "التحليلات",
              "Analytics"
            ),
            t(
              "داخل النظام بدون Power BI",
              "Built in-system without Power BI"
            ),
            badge(
              t(
                "بدون اشتراك",
                "No BI Subscription"
              ),
              "success"
            )
          )}

        </div>

      </div>

    </div>

    <section class="section">

      <div class="card">

        <div class="cardHead">
          <div>
            <h3>
              ${t(
                "التسليم النهائي",
                "Final Handover"
              )}
            </h3>
          </div>
        </div>

        <div class="grid2">

          ${listItem(
            "code-2",
            t(
              "الكود المصدري",
              "Source Code"
            ),
            t(
              "كامل وتحت ملكية العميل",
              "Complete and client-owned"
            )
          )}

          ${listItem(
            "database",
            t(
              "قاعدة البيانات",
              "Database"
            ),
            t(
              "المخطط والنسخة النهائية",
              "Schema and final copy"
            )
          )}

          ${listItem(
            "key-round",
            t(
              "حساب الإدارة",
              "Admin Account"
            ),
            t(
              "وصول كامل",
              "Full access"
            )
          )}

          ${listItem(
            "book-open-check",
            t(
              "التشغيل والنسخ والاستعادة",
              "Run Backup & Restore"
            ),
            t(
              "دليل كامل مع تجربة استعادة",
              "Full guide plus restore test"
            )
          )}

        </div>

        <div
          class="permissionNotice"
          style="margin-top:14px"
        >

          ${icon("badge-check")}

          <span>
            ${t(
              "المشروع لا يعتبر مكتملًا إلا بعد تنفيذ النطاق المتفق عليه ومعالجة الملاحظات المتعلقة به وإعادة الاختبار ثم الاعتماد النهائي",
              "The project is not considered complete until the agreed scope is implemented in-scope issues are fixed and retested and final acceptance is received"
            )}
          </span>

        </div>

      </div>

    </section>
  `;
}

function home() {
  switch (
    state.role
  ) {
    case "owner":
      return ownerHome();

    case "quality_admin":
      return qualityAdminHome();

    case "quality_staff":
      return qualityStaffHome();

    case "project_manager":
      return projectManagerHome();

    case "inspector":
      return inspectorHome();

    case "guard_supervisor":
      return supervisorHome();

    case "guard":
      return guardHome();

    default:
      return ownerHome();
  }
}

function render() {
  const views = {
    home,

    projects:
      projectsPage,

    project:
      projectPage,

    schedule:
      schedulePage,

    my_visits:
      myVisitsPage,

    inspection:
      inspectionPage,

    review:
      reviewPage,

    actions:
      actionsPage,

    analytics:
      analyticsPage,

    reports:
      reportsPage,

    my_reports:
      myReportsPage,

    returned:
      returnedPage,

    guards:
      guardsPage,

    training:
      trainingPage,

    forms:
      formsPage,

    permissions:
      permissionsPage,

    sensitive:
      sensitivePage,

    my_services:
      myServicesPage,

    operations:
      operationsPage
  };

  const view =
    views[state.page] ||
    home;

  document.querySelector(
    "#page"
  ).innerHTML =
    view();

  setupNavigation();

  refreshIcons();

  if (
    state.page ===
    "schedule"
  ) {
    renderAvailability();
  }

  animatePage();
}

function openProject(id) {
  if (
    state.role ===
      "project_manager" &&
    id !== "P-001"
  ) {
    accessDeniedDemo();

    return;
  }

  state.page =
    state.role ===
      "project_manager"
      ? "project"
      : "project";

  render();
}

function grantSensitive() {
  if (
    state.role !== "owner"
  ) {
    toast(
      t(
        "مالك النظام فقط يستطيع منح هذه الصلاحية",
        "Only the System Owner can grant this permission"
      )
    );

    return;
  }

  const role =
    document.querySelector(
      "#sensitiveRole"
    )?.value;

  if (
    !state.sensitiveAccess.includes(
      role
    )
  ) {
    state.sensitiveAccess.push(
      role
    );
  }

  toast(
    t(
      "تم منح التصريح المستقل وتسجيل العملية",
      "Independent permission granted and logged"
    )
  );
}

function revokeSensitive() {
  if (
    state.role !== "owner"
  ) {
    return;
  }

  const role =
    document.querySelector(
      "#sensitiveRole"
    )?.value;

  state.sensitiveAccess =
    state.sensitiveAccess.filter(
      item => item !== role
    );

  toast(
    t(
      "تم سحب التصريح وتسجيل العملية",
      "Permission revoked and logged"
    )
  );
}

function searchData() {
  const rows = [
    {
      ar: "محمد العتيبي",
      en: "Mohammed Al Otaibi",
      sub:
        "EMP-1042 · P-001",
      roles: [
        "owner",
        "quality_admin",
        "quality_staff",
        "project_manager",
        "inspector",
        "guard_supervisor"
      ]
    },

    {
      ar: "VIS-2026-000123",
      en: "VIS-2026-000123",
      sub:
        "P-001 · 04 Oct",
      roles: [
        "owner",
        "quality_admin",
        "quality_staff",
        "project_manager",
        "inspector"
      ]
    },

    {
      ar: "REP-2026-000094",
      en: "REP-2026-000094",
      sub:
        "P-001 · Approved",
      roles: [
        "owner",
        "quality_admin",
        "quality_staff",
        "project_manager",
        "inspector"
      ]
    },

    {
      ar: "CAPA-2026-0041",
      en: "CAPA-2026-0041",
      sub:
        "P-001 · Red escalation",
      roles: [
        "owner",
        "quality_admin",
        "quality_staff",
        "project_manager"
      ]
    }
  ];

  return rows.filter(
    item =>
      item.roles.includes(
        state.role
      )
  );
}

function openSearch() {
  document.querySelector(
    "#searchLayer"
  ).classList.remove(
    "hidden"
  );

  document.querySelector(
    "#searchField"
  ).value = "";

  renderSearch();

  setTimeout(
    () => {
      document.querySelector(
        "#searchField"
      ).focus();
    },
    50
  );
}

function closeSearch() {
  document.querySelector(
    "#searchLayer"
  ).classList.add(
    "hidden"
  );
}

function renderSearch() {
  const q =
    (
      document.querySelector(
        "#searchField"
      )?.value || ""
    )
      .trim()
      .toLowerCase();

  let rows =
    searchData();

  if (q) {
    rows =
      rows.filter(
        item =>
          (
            item.ar +
            item.en +
            item.sub
          )
            .toLowerCase()
            .includes(q)
      );
  }

  document.querySelector(
    "#searchResults"
  ).innerHTML =
    rows.length
      ? rows
          .map(item => {
            return `
              <div class="searchItem">

                <div>
                  <b>
                    ${
                      state.lang ===
                      "ar"
                        ? item.ar
                        : item.en
                    }
                  </b>

                  <span>
                    ${item.sub}
                  </span>
                </div>

                ${icon("arrow-up-left")}

              </div>
            `;
          })
          .join("")
      : `
        <div
          style="
            padding:35px;
            text-align:center;
            color:var(--muted);
            font-size:9px
          "
        >
          ${icon("search-x")}

          <p>
            ${t(
              "لا توجد نتائج ضمن صلاحيات هذا الحساب",
              "No results within this account scope"
            )}
          </p>
        </div>
      `;

  refreshIcons();
}

function notificationModal() {
  modal(`
    <h2>
      ${t(
        "الإشعارات",
        "Notifications"
      )}
    </h2>

    <div class="list">

      ${listItem(
        "siren",
        t(
          "ملاحظة حرجة جديدة",
          "New Critical Finding"
        ),
        t(
          "تم إرسال إشعار فوري لإدارة المشروع",
          "Immediate Project Management notification sent"
        ),
        badge(
          t(
            "فوري",
            "Immediate"
          ),
          "danger"
        )
      )}

      ${listItem(
        "clock-alert",
        t(
          "تصعيد بعد 3 أيام",
          "3-Day Escalation"
        ),
        t(
          "تم إرسال بريد المرحلة الصفراء",
          "Yellow-stage email sent"
        ),
        badge(
          t(
            "أصفر",
            "Yellow"
          ),
          "warning"
        )
      )}

      ${listItem(
        "file-check-2",
        t(
          "تقرير للمراجعة",
          "Report to Review"
        ),
        "REP-2026-000094"
      )}

      ${listItem(
        "lock-keyhole",
        t(
          "تحديث في قناة خاصة",
          "Private Channel Update"
        ),
        t(
          "المحتوى غير ظاهر في الإشعار",
          "Sensitive content is hidden from notification"
        )
      )}

    </div>
  `);
}

function toggleLanguage() {
  state.lang =
    state.lang === "ar"
      ? "en"
      : "ar";

  document.documentElement.lang =
    state.lang;

  document.documentElement.dir =
    state.lang === "ar"
      ? "rtl"
      : "ltr";

  updateAccount();
  setupAccountMenu();
  render();

  toast(
    state.lang === "ar"
      ? "تم التحويل إلى العربية"
      : "Switched to English"
  );
}

function updateLoginRole() {
  const role =
    document.querySelector(
      "#loginRole"
    ).value;

  document.querySelector(
    "#demoEmail"
  ).value =
    roles[role].email;
}

function enterDemo() {
  state.role =
    document.querySelector(
      "#loginRole"
    ).value;

  state.page = "home";

  const login =
    document.querySelector(
      "#loginScreen"
    );

  const app =
    document.querySelector(
      "#app"
    );

  if (
    window.gsap
  ) {
    gsap.to(
      login,
      {
        opacity: 0,
        scale: .985,
        duration: .45,
        ease: "power2.inOut",
        onComplete() {
          login.classList.add(
            "hidden"
          );

          app.classList.remove(
            "hidden"
          );

          gsap.from(
            app,
            {
              opacity: 0,
              duration: .5
            }
          );

          updateAccount();
          setupAccountMenu();
          render();
        }
      }
    );
  } else {
    login.classList.add(
      "hidden"
    );

    app.classList.remove(
      "hidden"
    );

    updateAccount();
    setupAccountMenu();
    render();
  }
}

function splashSequence() {
  const splash =
    document.querySelector(
      "#splash"
    );

  const login =
    document.querySelector(
      "#loginScreen"
    );

  if (
    !window.gsap
  ) {
    setTimeout(
      () => {
        splash.classList.add(
          "hidden"
        );

        login.classList.remove(
          "hidden"
        );
      },
      1400
    );

    return;
  }

  const tl =
    gsap.timeline();

  tl
    .from(
      ".markCore",
      {
        opacity: 0,
        scale: .4,
        rotate: -20,
        duration: .7,
        ease: "back.out(1.7)"
      }
    )

    .from(
      ".orbitA",
      {
        opacity: 0,
        scale: .5,
        duration: .6
      },
      "-=.3"
    )

    .from(
      ".orbitB",
      {
        opacity: 0,
        scale: .5,
        duration: .6
      },
      "-=.45"
    )

    .from(
      ".splashCopy > *",
      {
        opacity: 0,
        y: 15,
        stagger: .08,
        duration: .45
      },
      "-=.25"
    )

    .to(
      ".loadingLine span",
      {
        width: "100%",
        duration: 1.2,
        ease: "power2.inOut"
      }
    )

    .to(
      ".splashContent",
      {
        opacity: 0,
        y: -10,
        duration: .35
      }
    )

    .to(
      splash,
      {
        opacity: 0,
        duration: .45,
        onComplete() {
          splash.classList.add(
            "hidden"
          );

          login.classList.remove(
            "hidden"
          );

          gsap.from(
            ".loginVisualInner",
            {
              opacity: 0,
              x: 30,
              duration: .65
            }
          );

          gsap.from(
            ".loginCard",
            {
              opacity: 0,
              y: 30,
              duration: .65
            }
          );
        }
      }
    );
}

document.addEventListener(
  "DOMContentLoaded",
  () => {

    refreshIcons();

    splashSequence();

    document.querySelector(
      "#loginRole"
    ).addEventListener(
      "change",
      updateLoginRole
    );

    document.querySelector(
      "#loginBtn"
    ).addEventListener(
      "click",
      enterDemo
    );

    document.querySelector(
      "#accountButton"
    ).addEventListener(
      "click",
      event => {
        event.stopPropagation();

        document.querySelector(
          "#accountMenu"
        ).classList.toggle(
          "open"
        );
      }
    );

    document.querySelector(
      "#mobileMenu"
    ).addEventListener(
      "click",
      () => {
        document.querySelector(
          "#mobileNav"
        ).classList.toggle(
          "open"
        );
      }
    );

    document.querySelector(
      "#globalSearchButton"
    ).addEventListener(
      "click",
      openSearch
    );

    document.querySelector(
      "#searchClose"
    ).addEventListener(
      "click",
      closeSearch
    );

    document.querySelector(
      "#searchField"
    ).addEventListener(
      "input",
      renderSearch
    );

    document.querySelector(
      "#languageButton"
    ).addEventListener(
      "click",
      toggleLanguage
    );

    document.querySelector(
      "#notificationButton"
    ).addEventListener(
      "click",
      notificationModal
    );

    document.querySelector(
      "#modalClose"
    ).addEventListener(
      "click",
      closeModal
    );

    document.querySelector(
      "#modalLayer"
    ).addEventListener(
      "click",
      event => {
        if (
          event.target.id ===
          "modalLayer"
        ) {
          closeModal();
        }
      }
    );

    document.querySelector(
      "#searchLayer"
    ).addEventListener(
      "click",
      event => {
        if (
          event.target.id ===
          "searchLayer"
        ) {
          closeSearch();
        }
      }
    );

    document.addEventListener(
      "click",
      event => {
        if (
          !event.target.closest(
            ".accountWrap"
          )
        ) {
          document.querySelector(
            "#accountMenu"
          ).classList.remove(
            "open"
          );
        }
      }
    );

    document.addEventListener(
      "keydown",
      event => {

        if (
          event.key === "Escape"
        ) {
          closeModal();
          closeSearch();
        }

        if (
          (
            event.ctrlKey ||
            event.metaKey
          ) &&
          event.key.toLowerCase() ===
            "k"
        ) {
          event.preventDefault();
          openSearch();
        }

      }
    );

  }
);