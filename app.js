const S = {
  role: 'owner',
  view: 'dashboard',
  lang: 'ar',
  sensitiveGranted: ['owner'],
  answers: {
    a: 'ok',
    b: 'fail',
    c: 'na',
    d: 'ok'
  },
  status: 'draft',
  reviewState: 'pending',
  selectedInspector: '',
  findingType: 'immediate',
  findingSeverity: 'critical',
  escalationBasis: 'calendar',
  escalationStart: 'finding_created',
  attachmentPolicy: 'compressed',
  signatureDone: false
};

const t = (ar, en) => S.lang === 'ar' ? ar : en;

const I = name => `<i data-lucide="${name}"></i>`;

const B = (text, type = 'neutral') => {
  return `<span class="badge ${type}">${text}</span>`;
};

const ROLE_META = {
  owner: {
    ar: 'سلطان — مالك النظام',
    en: 'Sultan — System Owner',
    sar: 'كل المشاريع + إدارة صلاحية البلاغات الحساسة',
    sen: 'All projects + sensitive access control'
  },

  quality_admin: {
    ar: 'إدارة قسم الجودة',
    en: 'Quality Management',
    sar: 'كل المشاريع التشغيلية',
    sen: 'All operational projects'
  },

  quality_staff: {
    ar: 'موظف قسم الجودة',
    en: 'Quality Officer',
    sar: 'المراجعة والمتابعة ضمن الصلاحيات',
    sen: 'Review and follow-up within permissions'
  },

  project_manager: {
    ar: 'مدير مشروع — أحمد',
    en: 'Project Manager — Ahmed',
    sar: 'مشروع الواحة فقط',
    sen: 'Al Waha project only'
  },

  inspector: {
    ar: 'مفتش الجودة — خالد',
    en: 'Quality Inspector — Khaled',
    sar: 'زياراته ونماذجه فقط',
    sen: 'Assigned visits and forms only'
  },

  guard_supervisor: {
    ar: 'مشرف حراس الأمن — فهد',
    en: 'Guard Supervisor — Fahad',
    sar: 'الحراس وطلبات التدريب ضمن النطاق',
    sen: 'Guards and training requests in scope'
  },

  guard: {
    ar: 'حارس الأمن — محمد',
    en: 'Security Guard — Mohammed',
    sar: 'الخدمات الشخصية والبلاغات الخاصة',
    sen: 'Personal services and own reports'
  }
};

const NAV = [
  [
    'dashboard',
    'layout-dashboard',
    'لوحة التحكم',
    'Dashboard',
    'owner,quality_admin,quality_staff,project_manager,inspector,guard_supervisor'
  ],

  [
    'projects',
    'building-2',
    'المشاريع',
    'Projects',
    'owner,quality_admin,quality_staff,project_manager'
  ],

  [
    'schedule',
    'calendar-days',
    'جدول التفتيش',
    'Inspection Schedule',
    'owner,quality_admin,project_manager,inspector'
  ],

  [
    'inspection',
    'clipboard-check',
    'التفتيش الميداني',
    'Field Inspection',
    'owner,quality_admin,quality_staff,project_manager,inspector'
  ],

  [
    'review',
    'stamp',
    'المراجعة والاعتماد',
    'Review & Approval',
    'owner,quality_admin,quality_staff'
  ],

  [
    'forms',
    'blocks',
    'النماذج والإصدارات',
    'Forms & Versions',
    'owner,quality_admin'
  ],

  [
    'guards',
    'users-round',
    'الحراس والتقييم',
    'Guards & Evaluation',
    'owner,quality_admin,quality_staff,project_manager,inspector,guard_supervisor'
  ],

  [
    'actions',
    'circle-check-big',
    'الإجراءات والتصعيد',
    'Actions & Escalation',
    'owner,quality_admin,quality_staff,project_manager'
  ],

  [
    'training',
    'graduation-cap',
    'طلبات التدريب',
    'Training Requests',
    'owner,quality_admin,project_manager,guard_supervisor'
  ],

  [
    'confidential',
    'lock-keyhole',
    'البلاغات الحساسة',
    'Sensitive Reports',
    'owner,quality_admin,quality_staff,project_manager,inspector,guard_supervisor,guard'
  ],

  [
    'reports',
    'file-chart-column',
    'التقارير',
    'Reports',
    'owner,quality_admin,quality_staff,project_manager,inspector'
  ],

  [
    'analytics',
    'chart-no-axes-combined',
    'التحليلات',
    'Analytics',
    'owner,quality_admin,project_manager'
  ],

  [
    'score_model',
    'calculator',
    'معادلة التقييم',
    'Scoring Model',
    'owner,quality_admin'
  ],

  [
    'registration',
    'file-signature',
    'التسجيل والتعهد',
    'Registration & Undertaking',
    'owner,quality_admin'
  ],

  [
    'users',
    'user-cog',
    'الحسابات والصلاحيات',
    'Accounts & Permissions',
    'owner,quality_admin'
  ],

  [
    'permission_test',
    'shield-check',
    'اختبار الصلاحيات',
    'Permission Tests',
    'owner,quality_admin'
  ],

  [
    'attachment_settings',
    'paperclip',
    'سياسة المرفقات',
    'Attachment Policy',
    'owner,quality_admin'
  ],

  [
    'audit',
    'scroll-text',
    'سجل العمليات',
    'Audit Log',
    'owner,quality_admin'
  ],

  [
    'backup',
    'database-backup',
    'النسخ والاستعادة',
    'Backup & Restore',
    'owner'
  ],

  [
    'delivery_plan',
    'clipboard-list',
    'خطة التنفيذ والتسليم',
    'Delivery Plan',
    'owner,quality_admin'
  ],

  [
    'demo_guide',
    'map',
    'دليل الديمو',
    'Demo Guide',
    'owner,quality_admin,quality_staff,project_manager,inspector,guard_supervisor,guard'
  ]
];

const projects = [
  {
    id: 'P-001',
    ar: 'مشروع الواحة السكني',
    en: 'Al Waha Residential',
    code: 'WH-01',
    regionAr: 'الرياض — شمال',
    regionEn: 'Riyadh — North',
    score: 92,
    visits: 18,
    open: 3,
    employees: 120,
    findings: 14,
    avgClose: 3.2,
    improvement: 8.4,
    complaints: 2,
    contractDays: 42
  },

  {
    id: 'P-002',
    ar: 'مشروع بوابة النخيل',
    en: 'Palm Gate Project',
    code: 'PG-07',
    regionAr: 'الرياض — شرق',
    regionEn: 'Riyadh — East',
    score: 81,
    visits: 14,
    open: 6,
    employees: 75,
    findings: 19,
    avgClose: 5.8,
    improvement: 2.1,
    complaints: 5,
    contractDays: 17
  }
];

const inspectors = [
  {
    id: 'INS-01',
    ar: 'خالد السالم',
    en: 'Khaled Al Salem',
    employee: 'EMP-2201',
    visits: {
      '2026-10-08': ['10:00'],
      '2026-10-09': ['09:00']
    }
  },

  {
    id: 'INS-02',
    ar: 'ريم القحطاني',
    en: 'Reem Al Qahtani',
    employee: 'EMP-2207',
    visits: {
      '2026-10-08': ['13:00'],
      '2026-10-10': ['10:00']
    }
  },

  {
    id: 'INS-03',
    ar: 'سارة الحربي',
    en: 'Sarah Al Harbi',
    employee: 'EMP-2212',
    visits: {
      '2026-10-08': ['10:00', '15:00']
    }
  },

  {
    id: 'INS-04',
    ar: 'ماجد الدوسري',
    en: 'Majed Al Dosari',
    employee: 'EMP-2219',
    visits: {}
  }
];

const scorePolicy = {
  severity: {
    low: 2,
    medium: 5,
    high: 10,
    critical: 20
  },

  typeMultiplier: {
    immediate: 1.5,
    timed: 1,
    long_term: 0.5
  }
};

function icons() {
  if (window.lucide) {
    lucide.createIcons();
  }
}

function toast(message) {
  const element = document.querySelector('#toast');

  if (!element) {
    return;
  }

  element.textContent = message;
  element.classList.add('show');

  clearTimeout(window.__toastTimer);

  window.__toastTimer = setTimeout(() => {
    element.classList.remove('show');
  }, 2500);
}

function projectName(id) {
  const project = projects.find(item => item.id === id);

  if (!project) {
    return id;
  }

  return S.lang === 'ar'
    ? project.ar
    : project.en;
}

function hasSensitive() {
  return (
    S.role === 'owner' ||
    S.role === 'guard' ||
    S.sensitiveGranted.includes(S.role)
  );
}

function allowed(view) {
  const item = NAV.find(nav => nav[0] === view);

  if (!item) {
    return true;
  }

  if (!item[4].split(',').includes(S.role)) {
    return false;
  }

  if (view === 'confidential' && !hasSensitive()) {
    return false;
  }

  return true;
}

function currentTitle() {
  const item = NAV.find(nav => nav[0] === S.view);

  return item
    ? t(item[2], item[3])
    : t('لوحة التحكم', 'Dashboard');
}

function setupNav() {
  const nav = document.querySelector('#nav');

  if (!nav) {
    return;
  }

  nav.innerHTML = NAV
    .filter(item => item[4].split(',').includes(S.role))
    .filter(item => {
      return item[0] !== 'confidential' || hasSensitive();
    })
    .map(item => {
      return `
        <button
          class="navBtn ${S.view === item[0] ? 'active' : ''}"
          data-v="${item[0]}"
        >
          ${I(item[1])}

          <span>
            ${t(item[2], item[3])}
          </span>

          ${
            item[0] === 'confidential'
              ? `<span class="tag">${t('خاص', 'Private')}</span>`
              : ''
          }
        </button>
      `;
    })
    .join('');

  nav.querySelectorAll('.navBtn').forEach(button => {
    button.onclick = () => {
      go(button.dataset.v);
    };
  });

  icons();
}

function setupRoles() {
  const menu = document.querySelector('#roleMenu');

  if (!menu) {
    return;
  }

  const roles = [
    [
      'owner',
      'مالك النظام',
      'System Owner',
      'كل المشاريع + منح تصريح البلاغات',
      'All projects + sensitive access grants'
    ],

    [
      'quality_admin',
      'إدارة الجودة',
      'Quality Management',
      'كل المشاريع التشغيلية',
      'All operational projects'
    ],

    [
      'quality_staff',
      'موظف الجودة',
      'Quality Officer',
      'مراجعة ومتابعة ضمن النطاق',
      'Review and follow-up in scope'
    ],

    [
      'project_manager',
      'مدير المشروع',
      'Project Manager',
      'مشروع الواحة فقط',
      'Al Waha only'
    ],

    [
      'inspector',
      'مفتش الجودة',
      'Quality Inspector',
      'زياراته ونماذجه فقط',
      'Assigned visits and forms only'
    ],

    [
      'guard_supervisor',
      'مشرف الحراس',
      'Guard Supervisor',
      'التقييم وطلبات التدريب',
      'Evaluation and training requests'
    ],

    [
      'guard',
      'حارس الأمن',
      'Security Guard',
      'الخدمات الشخصية والبلاغات',
      'Personal services and reports'
    ]
  ];

  menu.innerHTML = roles
    .map(role => {
      return `
        <button data-r="${role[0]}">
          <span class="rdot"></span>

          <div>
            <b>
              ${t(role[1], role[2])}
            </b>

            <small>
              ${t(role[3], role[4])}
            </small>
          </div>
        </button>
      `;
    })
    .join('');

  menu.querySelectorAll('button').forEach(button => {
    button.onclick = () => {
      S.role = button.dataset.r;

      if (!allowed(S.view)) {
        S.view = S.role === 'guard'
          ? 'confidential'
          : 'dashboard';
      }

      menu.classList.remove('open');

      updateRole();

      toast(
        t(
          'تم تبديل الحساب التجريبي',
          'Demo account switched'
        )
      );
    };
  });
}

function updateStatic() {
  const map = [
    [
      '#brandSub',
      'إدارة الجودة الأمنية',
      'Security Quality Management'
    ],

    [
      '#demoLabel',
      'نسخة تجريبية ببيانات وهمية',
      'Interactive demo with mock data'
    ],

    [
      '#sideFootTitle',
      'نطاقات وصول حقيقية في النظام النهائي',
      'Server-enforced access scopes in production'
    ],

    [
      '#sideFootSub',
      'الديمو يحاكي الواجهة وتدفق الصلاحيات',
      'This demo simulates UI and permission flows'
    ],

    [
      '#searchLabel',
      'بحث سريع',
      'Quick search'
    ],

    [
      '#searchHint',
      'النتائج تخضع لصلاحيات الحساب الحالي والبلاغات الحساسة لا تظهر في البحث العام',
      'Results follow the current account scope and sensitive reports never appear in global search'
    ]
  ];

  map.forEach(item => {
    const element = document.querySelector(item[0]);

    if (element) {
      element.textContent = t(item[1], item[2]);
    }
  });

  const searchInput = document.querySelector('#globalSearch');

  if (searchInput) {
    searchInput.placeholder = t(
      'ابحث بالاسم أو الهوية أو الرقم الوظيفي أو رقم الحالة',
      'Search by name ID employee no or case reference'
    );
  }
}

function updateRole() {
  const meta = ROLE_META[S.role];

  const avatar = document.querySelector('.avatar');
  const roleName = document.querySelector('#roleName');
  const roleScope = document.querySelector('#roleScope');

  if (avatar) {
    avatar.textContent = S.lang === 'ar'
      ? 'س'
      : 'S';
  }

  if (roleName) {
    roleName.textContent = t(
      meta.ar,
      meta.en
    );
  }

  if (roleScope) {
    roleScope.textContent = t(
      meta.sar,
      meta.sen
    );
  }

  setupRoles();
  setupNav();
  render();
}

function go(view) {
  if (!allowed(view)) {
    toast(
      t(
        'هذا القسم غير متاح للحساب الحالي',
        'This section is not available to the current account'
      )
    );

    return;
  }

  S.view = view;

  render();

  const sidebar = document.querySelector('#sidebar');

  if (sidebar) {
    sidebar.classList.remove('open');
  }

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function stat(
  icon,
  ar,
  en,
  value,
  trend,
  cls = ''
) {
  return `
    <div class="stat">
      <div class="statIcon ${cls}">
        ${I(icon)}
      </div>

      <strong>
        ${value}
      </strong>

      <span>
        ${t(ar, en)}
      </span>

      <div class="trend">
        ${trend}
      </div>
    </div>
  `;
}

function listItem(
  icon,
  title,
  sub,
  end = ''
) {
  return `
    <div class="item">
      <div class="itemIcon">
        ${I(icon)}
      </div>

      <div class="itemMain">
        <b>
          ${title}
        </b>

        <span>
          ${sub}
        </span>
      </div>

      ${end}
    </div>
  `;
}

function toolbar(
  ar,
  en,
  subAr,
  subEn,
  actions = ''
) {
  return `
    <div class="toolbar">
      <div>
        <h2 class="cardTitle">
          ${t(ar, en)}
        </h2>

        <p class="sub">
          ${t(subAr, subEn)}
        </p>
      </div>

      ${actions}
    </div>
  `;
}

function hero() {
  let title = t(
    'من الزيارة الميدانية إلى قرار موثق في مسار واحد',
    'From field visit to a documented decision in one workflow'
  );

  let description = t(
    'متابعة التفتيش والمراجعة والإجراءات والتقارير مع فصل الصلاحيات حسب الدور والمشروع',
    'Inspection review corrective actions and reporting with strict role and project scope'
  );

  if (S.role === 'inspector') {
    title = t(
      'زياراتك الميدانية في مكان واحد',
      'Your field visits in one place'
    );

    description = t(
      'ابدأ الزيارة واحفظ المسودة وارفع الأدلة واستكمل ما يعاد إليك بدون الاطلاع على نتائج وتحليلات المشاريع',
      'Start assigned visits save drafts upload evidence and complete returned work without project analytics access'
    );
  }

  if (S.role === 'project_manager') {
    title = t(
      'نظرة تشغيلية على مشروع الواحة',
      'Operational view of Al Waha'
    );

    description = t(
      'تظهر لك بيانات المشروع المسند فقط مع تقاريره وتحليلاته وإجراءاته وطلبات التدريب',
      'Only your assigned project is visible with reports analytics actions and training approvals'
    );
  }

  if (S.role === 'guard_supervisor') {
    title = t(
      'متابعة الحراس والتدريب',
      'Guard evaluation and training'
    );

    description = t(
      'قيّم الحراس ضمن نطاقك وارفع طلبات التدريب وتابع مسار الموافقة',
      'Evaluate guards in scope raise training requests and track approvals'
    );
  }

  return `
    <section class="hero">
      <div class="heroGrid">
        <div>
          <div class="kicker">
            ${I('shield-check')}

            Security Quality Management System
          </div>

          <h2>
            ${title}
          </h2>

          <p>
            ${description}
          </p>
        </div>

        <div class="systemCard">
          <div class="systemHead">
            <b>
              ${t(
                'حالة النظام',
                'System status'
              )}
            </b>

            <span class="live"></span>
          </div>

          <div class="miniGrid">
            <div class="mini">
              <b>99.9%</b>

              <span>
                ${t(
                  'جاهزية الخدمة',
                  'Availability'
                )}
              </span>
            </div>

            <div class="mini">
              <b>0</b>

              <span>
                ${t(
                  'محاولات وصول غير مصرح',
                  'Unauthorized attempts'
                )}
              </span>
            </div>

            <div class="mini">
              <b>04:10</b>

              <span>
                ${t(
                  'آخر نسخة احتياطية',
                  'Last backup'
                )}
              </span>
            </div>

            <div class="mini">
              <b>v2.4</b>

              <span>
                ${t(
                  'إصدار نموذج نشط',
                  'Active form version'
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function dashboard() {
  const secondCard =
    S.role === 'inspector'
      ? stat(
          'undo-2',
          'معاد لي للاستكمال',
          'Returned to me',
          '2',
          t(
            'تحتاج استكمال',
            'Need completion'
          ),
          'gold'
        )
      : stat(
          'badge-check',
          'متوسط الالتزام',
          'Average compliance',
          S.role === 'project_manager'
            ? '92%'
            : '88%',
          '+3.2%',
          'gold'
        );

  const fourthCard =
    S.role === 'inspector'
      ? stat(
          'save',
          'مسوداتي',
          'My drafts',
          '1',
          t(
            'محفوظة',
            'Saved'
          ),
          'blue'
        )
      : stat(
          'timer',
          'بانتظار المراجعة',
          'Pending review',
          '6',
          t(
            '+1 اليوم',
            '+1 today'
          ),
          'blue'
        );

  return `
    <div class="view">
      ${hero()}

      <div class="stats">
        ${stat(
          'clipboard-check',
          S.role === 'inspector'
            ? 'زياراتي اليوم'
            : 'زيارات اليوم',
          S.role === 'inspector'
            ? 'My visits today'
            : 'Visits today',
          S.role === 'inspector'
            ? '3'
            : '12',
          '+8%'
        )}

        ${secondCard}

        ${stat(
          'triangle-alert',
          'إجراءات مفتوحة',
          'Open actions',
          S.role === 'project_manager'
            ? '3'
            : '9',
          t(
            '-2 هذا الأسبوع',
            '-2 this week'
          ),
          'red'
        )}

        ${fourthCard}
      </div>

      <div class="grid2">
        <div class="card">
          <div class="cardHead">
            <div>
              <h3 class="cardTitle">
                ${t(
                  'النشاط والزيارات القادمة',
                  'Activity & upcoming visits'
                )}
              </h3>

              <p class="sub">
                ${t(
                  'آخر التحديثات ضمن نطاق الحساب',
                  'Latest updates within account scope'
                )}
              </p>
            </div>

            <button
              class="btn secondary"
              onclick="go('schedule')"
            >
              ${I('calendar')}

              ${t(
                'عرض الجدول',
                'View schedule'
              )}
            </button>
          </div>

          <div class="list">
            ${listItem(
              'map-pinned',
              'VIS-2026-000123',
              `${projectName('P-001')} · ${t(
                'اليوم 10:30',
                'Today 10:30'
              )}`,
              t(
                'اليوم',
                'Today'
              )
            )}

            ${
              S.role === 'inspector'
                ? ''
                : listItem(
                    'clipboard-check',
                    'VIS-2026-000127',
                    `${projectName('P-002')} · ${t(
                      'وردية مسائية',
                      'Evening shift'
                    )}`,
                    t(
                      'غدًا',
                      'Tomorrow'
                    )
                  )
            }

            ${listItem(
              'refresh-cw',
              'VIS-2026-000131',
              `${t(
                'جولة متابعة',
                'Follow-up visit'
              )} · ${projectName('P-001')}`,
              '07 Oct'
            )}
          </div>
        </div>

        <div class="card">
          <div class="cardHead">
            <div>
              <h3 class="cardTitle">
                ${
                  S.role === 'inspector'
                    ? t(
                        'حدود حساب المفتش',
                        'Inspector account boundary'
                      )
                    : t(
                        'تطور الالتزام',
                        'Compliance trend'
                      )
                }
              </h3>

              <p class="sub">
                ${
                  S.role === 'inspector'
                    ? t(
                        'المفتش لا يطلع على نتائج المشاريع أو تحليلاتها',
                        'Inspector cannot access project results or analytics'
                      )
                    : t(
                        'الزيارات المعتمدة فقط تدخل في المؤشر الرسمي',
                        'Only approved inspections feed official comparisons'
                      )
                }
              </p>
            </div>
          </div>

          ${
            S.role === 'inspector'
              ? `
                <div class="sensitive">
                  ${I('eye-off')}

                  <div>
                    <b>
                      ${t(
                        'النتائج مخفية عن هذا الدور',
                        'Results hidden for this role'
                      )}
                    </b>

                    <p>
                      ${t(
                        'المفتش يعبئ ويرفع الأدلة ويحفظ المسودة ويكمل ما يعاد إليه فقط',
                        'Inspector fills forms uploads evidence saves drafts and completes returned work only'
                      )}
                    </p>
                  </div>
                </div>
              `
              : `
                <div class="chart">
                  ${[
                    62,
                    69,
                    73,
                    71,
                    84,
                    91
                  ]
                    .map(
                      (
                        height,
                        index
                      ) => {
                        const arMonths = [
                          'مايو',
                          'يونيو',
                          'يوليو',
                          'أغسطس',
                          'سبتمبر',
                          'أكتوبر'
                        ];

                        const enMonths = [
                          'May',
                          'Jun',
                          'Jul',
                          'Aug',
                          'Sep',
                          'Oct'
                        ];

                        return `
                          <div class="barCol">
                            <div
                              class="bar ${
                                index === 5
                                  ? 'gold'
                                  : ''
                              }"
                              style="height:${height}%"
                            ></div>

                            <span>
                              ${t(
                                arMonths[index],
                                enMonths[index]
                              )}
                            </span>
                          </div>
                        `;
                      }
                    )
                    .join('')}
                </div>
              `
          }
        </div>
      </div>
    </div>
  `;
}

function projectView() {
  const data =
    S.role === 'project_manager'
      ? projects.filter(
          project => project.id === 'P-001'
        )
      : projects;

  return `
    <div class="view">
      ${toolbar(
        'المشاريع والمناطق',
        'Projects & Regions',
        'كل مشروع له ملف مستقل وسجل زيارات وملاحظات وإجراءات وتحليلات',
        'Each project has a dedicated profile visits findings actions and analytics',
        ['owner', 'quality_admin'].includes(S.role)
          ? `
            <button
              class="btn primary"
              onclick="projectModal()"
            >
              ${I('plus')}

              ${t(
                'إضافة مشروع',
                'Add project'
              )}
            </button>
          `
          : ''
      )}

      <div class="projects">
        ${data
          .map(project => {
            return `
              <article class="project">
                <div class="projectTop">
                  <div>
                    <span class="code">
                      ${project.code}
                    </span>

                    <h3>
                      ${
                        S.lang === 'ar'
                          ? project.ar
                          : project.en
                      }
                    </h3>

                    <p>
                      ${
                        S.lang === 'ar'
                          ? project.regionAr
                          : project.regionEn
                      }
                    </p>
                  </div>

                  ${B(
                    t(
                      'نشط',
                      'Active'
                    ),
                    'success'
                  )}
                </div>

                <div class="pmetrics">
                  <div>
                    <b>
                      ${project.score}%
                    </b>

                    <span>
                      ${t(
                        'التقييم',
                        'Score'
                      )}
                    </span>
                  </div>

                  <div>
                    <b>
                      ${project.visits}
                    </b>

                    <span>
                      ${t(
                        'زيارة',
                        'Visits'
                      )}
                    </span>
                  </div>

                  <div>
                    <b>
                      ${project.open}
                    </b>

                    <span>
                      ${t(
                        'إجراءات مفتوحة',
                        'Open actions'
                      )}
                    </span>
                  </div>
                </div>

                <div class="progress">
                  <span
                    style="width:${project.score}%"
                  ></span>
                </div>

                <div
                  style="
                    display:flex;
                    gap:7px;
                    margin-top:13px;
                    flex-wrap:wrap
                  "
                >
                  <button
                    class="btn secondary"
                    onclick="openProject('${project.id}')"
                  >
                    ${I('arrow-up-left')}

                    ${t(
                      'فتح المشروع',
                      'Open project'
                    )}
                  </button>

                  <button
                    class="btn"
                    onclick="go('analytics')"
                  >
                    ${I('chart-column')}

                    ${t(
                      'التحليل',
                      'Analytics'
                    )}
                  </button>
                </div>
              </article>
            `;
          })
          .join('')}
      </div>
    </div>
  `;
}

function visitData() {
  let data = [
    {
      id: 'VIS-2026-000123',
      project: 'P-001',
      time: t(
        '04 أكتوبر · 10:30',
        '04 Oct · 10:30'
      ),
      type: t(
        'دوري',
        'Routine'
      ),
      shift: t(
        'صباحية',
        'Morning'
      ),
      status: t(
        'مجدولة',
        'Scheduled'
      ),
      assignee: 'me'
    },

    {
      id: 'VIS-2026-000127',
      project: 'P-002',
      time: t(
        '07 أكتوبر · 18:00',
        '07 Oct · 18:00'
      ),
      type: t(
        'مفاجئ',
        'Surprise'
      ),
      shift: t(
        'مسائية',
        'Evening'
      ),
      status: t(
        'مجدولة',
        'Scheduled'
      ),
      assignee: 'other'
    },

    {
      id: 'VIS-2026-000118',
      project: 'P-001',
      time: t(
        '01 أكتوبر · 09:00',
        '01 Oct · 09:00'
      ),
      type: t(
        'متابعة',
        'Follow-up'
      ),
      shift: t(
        'صباحية',
        'Morning'
      ),
      status: t(
        'منفذة',
        'Completed'
      ),
      assignee: 'me'
    }
  ];

  if (
    S.role === 'project_manager' ||
    S.role === 'guard_supervisor'
  ) {
    data = data.filter(
      item => item.project === 'P-001'
    );
  }

  if (S.role === 'inspector') {
    data = data.filter(
      item => item.assignee === 'me'
    );
  }

  return data;
}

function visitRows() {
  return `
    <div class="table">
      <table>
        <thead>
          <tr>
            <th>
              ${t(
                'الزيارة',
                'Visit'
              )}
            </th>

            <th>
              ${t(
                'المشروع',
                'Project'
              )}
            </th>

            <th>
              ${t(
                'التاريخ',
                'Date'
              )}
            </th>

            <th>
              ${t(
                'النوع',
                'Type'
              )}
            </th>

            <th>
              ${t(
                'الوردية',
                'Shift'
              )}
            </th>

            <th>
              ${t(
                'الحالة',
                'Status'
              )}
            </th>

            <th></th>
          </tr>
        </thead>

        <tbody>
          ${visitData()
            .map(row => {
              return `
                <tr>
                  <td>
                    <b>
                      ${row.id}
                    </b>
                  </td>

                  <td>
                    ${projectName(
                      row.project
                    )}
                  </td>

                  <td>
                    ${row.time}
                  </td>

                  <td>
                    ${row.type}
                  </td>

                  <td>
                    ${row.shift}
                  </td>

                  <td>
                    ${B(
                      row.status,
                      row.status ===
                        t(
                          'منفذة',
                          'Completed'
                        )
                        ? 'success'
                        : 'info'
                    )}
                  </td>

                  <td>
                    <button
                      class="btn"
                      onclick="go('inspection')"
                    >
                      ${t(
                        'فتح',
                        'Open'
                      )}
                    </button>
                  </td>
                </tr>
              `;
            })
            .join('')}
        </tbody>
      </table>
    </div>
  `;
}

function inspectorStatus(
  inspector,
  date,
  time
) {
  const slots =
    inspector.visits[date] || [];

  return {
    busy: slots.includes(time),
    slots
  };
}

function availabilityCards(
  date = '2026-10-08',
  time = '10:00'
) {
  return inspectors
    .map(inspector => {
      const status =
        inspectorStatus(
          inspector,
          date,
          time
        );

      const label =
        status.busy
          ? t(
              'مجدول مسبقًا',
              'Already scheduled'
            )
          : t(
              'متاح',
              'Available'
            );

      const details =
        status.busy
          ? t(
              `لديه زيارة الساعة ${time}`,
              `Has a visit at ${time}`
            )
          : t(
              'لا يوجد تعارض في هذا التوقيت',
              'No conflict at this time'
            );

      return `
        <button
          class="
            availabilityCard
            ${
              status.busy
                ? 'busy'
                : 'available'
            }
            ${
              S.selectedInspector === inspector.id
                ? 'selected'
                : ''
            }
          "
          ${
            status.busy
              ? 'disabled'
              : ''
          }
          onclick="chooseInspector('${inspector.id}')"
        >
          <div class="availabilityIcon">
            ${I(
              status.busy
                ? 'calendar-x-2'
                : 'calendar-check-2'
            )}
          </div>

          <div>
            <b>
              ${t(
                inspector.ar,
                inspector.en
              )}
            </b>

            <span>
              ${inspector.employee}
              ·
              ${details}
            </span>
          </div>

          ${B(
            label,
            status.busy
              ? 'danger'
              : 'success'
          )}
        </button>
      `;
    })
    .join('');
}

function chooseInspector(id) {
  S.selectedInspector = id;

  updateAvailability();

  toast(
    t(
      'تم اختيار المفتش المتاح',
      'Available inspector selected'
    )
  );
}

function updateAvailability() {
  const date =
    document.querySelector(
      '#visitDate'
    )?.value ||
    '2026-10-08';

  const time =
    document.querySelector(
      '#visitTime'
    )?.value ||
    '10:00';

  const box =
    document.querySelector(
      '#inspectorAvailability'
    );

  if (box) {
    box.innerHTML =
      availabilityCards(
        date,
        time
      );

    icons();
  }
}

function schedule() {
  const days = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14
  ];

  const action =
    S.role === 'quality_admin'
      ? `
        <button
          class="btn primary"
          onclick="visitModal()"
        >
          ${I('plus')}

          ${t(
            'جدولة زيارة',
            'Schedule visit'
          )}
        </button>
      `
      : S.role === 'owner'
        ? B(
            t(
              'عرض فقط — الجدولة من إدارة الجودة',
              'View only — scheduling by Quality Management'
            ),
            'info'
          )
        : '';

  return `
    <div class="view">
      ${toolbar(
        'جدول التفتيش الميداني',
        'Field Inspection Schedule',
        'الجدولة والتعديل والإلغاء من إدارة الجودة فقط وكل مفتش يرى جدوله فقط',
        'Only Quality Management can schedule reschedule or cancel and inspectors see only their own assignments',
        action
      )}

      ${
        S.role === 'quality_admin'
          ? `
            <div class="card availabilitySummary">
              <div class="cardHead">
                <div>
                  <h3 class="cardTitle">
                    ${t(
                      'توافر المفتشين قبل الإسناد',
                      'Inspector availability before assignment'
                    )}
                  </h3>

                  <p class="sub">
                    ${t(
                      'عند اختيار اليوم والوقت تظهر حالة كل مفتش لتجنب التعارض',
                      'Choose date and time to see availability and prevent conflicts'
                    )}
                  </p>
                </div>

                <button
                  class="btn secondary"
                  onclick="visitModal()"
                >
                  ${I('users')}

                  ${t(
                    'فحص التوافر وجدولة',
                    'Check availability & schedule'
                  )}
                </button>
              </div>

              <div class="availabilityMini">
                ${inspectors
                  .map(
                    (
                      inspector,
                      index
                    ) => {
                      const busy =
                        index === 0 ||
                        index === 2;

                      return `
                        <div class="availabilityMiniItem">
                          <span
                            class="
                              availabilityDot
                              ${
                                busy
                                  ? 'busy'
                                  : 'available'
                              }
                            "
                          ></span>

                          <div>
                            <b>
                              ${t(
                                inspector.ar,
                                inspector.en
                              )}
                            </b>

                            <small>
                              ${
                                busy
                                  ? t(
                                      'مشغول 10:00',
                                      'Busy at 10:00'
                                    )
                                  : t(
                                      'متاح 10:00',
                                      'Available at 10:00'
                                    )
                              }
                            </small>
                          </div>
                        </div>
                      `;
                    }
                  )
                  .join('')}
              </div>
            </div>
          `
          : ''
      }

      <div
        class="card"
        style="margin-top:14px"
      >
        <div class="tabs">
          <button class="tab">
            ${t(
              'يومي',
              'Day'
            )}
          </button>

          <button class="tab">
            ${t(
              'أسبوعي',
              'Week'
            )}
          </button>

          <button class="tab active">
            ${t(
              'شهري',
              'Month'
            )}
          </button>

          <button class="tab">
            ${t(
              'سنوي',
              'Year'
            )}
          </button>
        </div>

        <div class="calendar">
          ${days
            .map(day => {
              return `
                <div class="day">
                  <span class="num">
                    ${day}
                  </span>

                  ${
                    day === 4
                      ? `
                        <div class="event">
                          10:30
                          ·
                          ${projectName('P-001')}

                          <br>

                          VIS-000123
                        </div>
                      `
                      : ''
                  }

                  ${
                    day === 7 &&
                    S.role !== 'inspector'
                      ? `
                        <div class="event gold">
                          18:00
                          ·
                          ${projectName('P-002')}

                          <br>

                          VIS-000127
                        </div>
                      `
                      : ''
                  }

                  ${
                    day === 11
                      ? `
                        <div class="event">
                          09:00
                          ·
                          ${projectName('P-001')}

                          <br>

                          VIS-000131
                        </div>
                      `
                      : ''
                  }
                </div>
              `;
            })
            .join('')}
        </div>
      </div>

      <div
        class="card"
        style="margin-top:14px"
      >
        <div class="cardHead">
          <div>
            <h3 class="cardTitle">
              ${t(
                'الزيارات القادمة',
                'Upcoming visits'
              )}
            </h3>

            <p class="sub">
              ${t(
                'المفتش يرى مواعيده فقط ولا يعدل جدول غيره',
                'Inspector sees only own schedule and cannot edit others'
              )}
            </p>
          </div>

          ${
            S.role === 'quality_admin'
              ? `
                <button
                  class="btn"
                  onclick="rescheduleModal()"
                >
                  ${I('calendar-sync')}

                  ${t(
                    'إعادة جدولة أو إلغاء',
                    'Reschedule / Cancel'
                  )}
                </button>
              `
              : ''
          }
        </div>

        ${visitRows()}
      </div>
    </div>
  `;
}

function score() {
  const weights = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
  };

  let numerator = 0;
  let denominator = 0;

  Object.keys(weights).forEach(
    key => {
      if (
        S.answers[key] !== 'na'
      ) {
        denominator +=
          weights[key];

        if (
          S.answers[key] === 'ok'
        ) {
          numerator +=
            weights[key];
        }
      }
    }
  );

  if (!denominator) {
    return null;
  }

  return Math.round(
    numerator /
      denominator *
      100
  );
}

function question(
  id,
  ar,
  en,
  descAr,
  descEn,
  weight
) {
  const answer =
    S.answers[id];

  return `
    <div class="question">
      <div class="qHead">
        <div>
          <h4>
            ${t(ar, en)}
          </h4>

          <p>
            ${t(
              descAr,
              descEn
            )}
          </p>
        </div>

        <span class="weight">
          ${t(
            'وزن',
            'Weight'
          )}
          ${weight}
        </span>
      </div>

      <div class="answers">
        <button
          class="
            ans
            ${
              answer === 'ok'
                ? 'ok active'
                : ''
            }
          "
          onclick="answer('${id}','ok')"
        >
          ${I('check')}

          ${t(
            'مطابق',
            'Compliant'
          )}
        </button>

        <button
          class="
            ans
            ${
              answer === 'fail'
                ? 'fail active'
                : ''
            }
          "
          onclick="answer('${id}','fail')"
        >
          ${I('x')}

          ${t(
            'غير مطابق',
            'Non-compliant'
          )}
        </button>

        <button
          class="
            ans
            ${
              answer === 'na'
                ? 'na active'
                : ''
            }
          "
          onclick="answer('${id}','na')"
        >
          ${I('minus')}

          ${t(
            'لا ينطبق',
            'N/A'
          )}
        </button>
      </div>
    </div>
  `;
}

function scoreRing() {
  const value = score();

  return `
    <div
      class="score"
      style="
        background:
          conic-gradient(
            var(--teal)
            0
            ${value || 0}%,
            rgba(255,255,255,.06)
            ${value || 0}%
            100%
          )
      "
    >
      <div>
        <b>
          ${
            value === null
              ? '—'
              : value + '%'
          }
        </b>

        <span>
          ${
            value === null
              ? t(
                  'غير قابلة للاحتساب',
                  'Not calculable'
                )
              : t(
                  'نسبة مطابقة الزيارة',
                  'Visit compliance'
                )
          }
        </span>
      </div>
    </div>
  `;
}

function findingClassificationPanel() {
  return `
    <div class="card findingCard">
      <div class="cardHead">
        <div>
          <h3 class="cardTitle">
            ${t(
              'تصنيف الملاحظة الناتجة عن البند غير المطابق',
              'Classify the finding created by the non-compliant item'
            )}
          </h3>

          <p class="sub">
            ${t(
              'التصنيف والخطورة يحددان الإشعار والمهلة والتصعيد والخصم المقترح',
              'Type and severity drive notification deadline escalation and proposed deduction'
            )}
          </p>
        </div>

        ${B(
          t(
            'مثال تفاعلي',
            'Interactive example'
          ),
          'warning'
        )}
      </div>

      <div class="formGrid">
        <div class="field">
          <label>
            ${t(
              'نوع المعالجة',
              'Treatment type'
            )}
          </label>

          <select
            class="select"
            onchange="
              S.findingType=this.value;
              render()
            "
          >
            <option
              value="immediate"
              ${
                S.findingType === 'immediate'
                  ? 'selected'
                  : ''
              }
            >
              ${t(
                'حالة فورية',
                'Immediate case'
              )}
            </option>

            <option
              value="timed"
              ${
                S.findingType === 'timed'
                  ? 'selected'
                  : ''
              }
            >
              ${t(
                'معالجة خلال مدة محددة',
                'Time-bound case'
              )}
            </option>

            <option
              value="long_term"
              ${
                S.findingType === 'long_term'
                  ? 'selected'
                  : ''
              }
            >
              ${t(
                'تحسين طويل المدى',
                'Long-term improvement'
              )}
            </option>
          </select>
        </div>

        <div class="field">
          <label>
            ${t(
              'درجة الخطورة',
              'Severity'
            )}
          </label>

          <select
            class="select"
            onchange="
              S.findingSeverity=this.value;
              render()
            "
          >
            <option
              value="low"
              ${
                S.findingSeverity === 'low'
                  ? 'selected'
                  : ''
              }
            >
              ${t(
                'منخفضة',
                'Low'
              )}
            </option>

            <option
              value="medium"
              ${
                S.findingSeverity === 'medium'
                  ? 'selected'
                  : ''
              }
            >
              ${t(
                'متوسطة',
                'Medium'
              )}
            </option>

            <option
              value="high"
              ${
                S.findingSeverity === 'high'
                  ? 'selected'
                  : ''
              }
            >
              ${t(
                'عالية',
                'High'
              )}
            </option>

            <option
              value="critical"
              ${
                S.findingSeverity === 'critical'
                  ? 'selected'
                  : ''
              }
            >
              ${t(
                'حرجة',
                'Critical'
              )}
            </option>
          </select>
        </div>
      </div>

      <div class="findingOutcome">
        ${I(
          S.findingSeverity === 'critical'
            ? 'siren'
            : 'clock-3'
        )}

        <div>
          <b>
            ${
              S.findingSeverity === 'critical'
                ? t(
                    'إشعار فوري لإدارة المشروع',
                    'Immediate Project Management alert'
                  )
                : t(
                    'تدخل في مسار المعالجة المحدد',
                    'Follows configured treatment flow'
                  )
            }
          </b>

          <span>
            ${t(
              'التصعيد بعد 3 ثم 6 ثم 9 أيام يظهر في شاشة الإجراءات والتصعيد',
              '3 6 and 9 day escalation appears in Actions and Escalation'
            )}
          </span>
        </div>

        <button
          class="
            btn
            ${
              S.findingSeverity === 'critical'
                ? 'dangerBtn'
                : 'secondary'
            }
          "
          onclick="registerFinding()"
        >
          ${t(
            'تسجيل الملاحظة',
            'Register finding'
          )}
        </button>
      </div>
    </div>
  `;
}

function registerFinding() {
  if (
    S.findingSeverity === 'critical'
  ) {
    toast(
      t(
        'تم تسجيل الحالة الحرجة ومحاكاة إشعار فوري لإدارة المشروع',
        'Critical finding registered and immediate Project Management alert simulated'
      )
    );

    return;
  }

  toast(
    t(
      'تم تسجيل الملاحظة وربطها بمسار المعالجة',
      'Finding registered and linked to its treatment workflow'
    )
  );
}

function inspection() {
  if (
    S.role === 'project_manager'
  ) {
    return `
      <div class="view">
        <div class="card">
          <div class="cardHead">
            <div>
              <h3 class="cardTitle">
                ${t(
                  'تقارير المشروع',
                  'Project reports'
                )}
              </h3>

              <p class="sub">
                ${t(
                  'مدير المشروع لا يعبئ التفتيش',
                  'Project manager has no inspection-entry permission'
                )}
              </p>
            </div>
          </div>

          ${visitRows()}
        </div>
      </div>
    `;
  }

  return `
    <div class="view">
      ${toolbar(
        'التفتيش الميداني',
        'Field Inspection',
        `VIS-2026-000123 · ${projectName('P-001')} · نموذج التفتيش الدوري v2.4`,
        `VIS-2026-000123 · ${projectName('P-001')} · Routine inspection form v2.4`,
        B(
          S.status === 'draft'
            ? t(
                'مسودة',
                'Draft'
              )
            : t(
                'بانتظار المراجعة',
                'Pending review'
              ),
          S.status === 'draft'
            ? 'warning'
            : 'info'
        )
      )}

      <div class="inspect">
        <div class="card">
          <div class="step done">
            <div class="stepN">
              1
            </div>

            <div>
              <b>
                ${t(
                  'بيانات الزيارة',
                  'Visit details'
                )}
              </b>

              <span>
                ${t(
                  'المشروع والموقع والوردية',
                  'Project site and shift'
                )}
              </span>
            </div>
          </div>

          <div class="step active">
            <div class="stepN">
              2
            </div>

            <div>
              <b>
                ${t(
                  'بنود التفتيش',
                  'Inspection items'
                )}
              </b>

              <span>
                ${t(
                  'الأوزان والإجابات',
                  'Weights and answers'
                )}
              </span>
            </div>
          </div>

          <div class="step">
            <div class="stepN">
              3
            </div>

            <div>
              <b>
                ${t(
                  'الحراس الحاضرون',
                  'Guards present'
                )}
              </b>

              <span>
                ${t(
                  'تقييم مستقل لكل حارس',
                  'Separate guard evaluation'
                )}
              </span>
            </div>
          </div>

          <div class="step">
            <div class="stepN">
              4
            </div>

            <div>
              <b>
                ${t(
                  'الأدلة والملاحظات',
                  'Evidence and notes'
                )}
              </b>

              <span>
                ${t(
                  'صور وفيديو ومستندات',
                  'Images video and documents'
                )}
              </span>
            </div>
          </div>

          <div class="step">
            <div class="stepN">
              5
            </div>

            <div>
              <b>
                ${t(
                  'المراجعة والإرسال',
                  'Review and submit'
                )}
              </b>

              <span>
                ${t(
                  'تثبيت الإصدار والنتيجة',
                  'Freeze version and score'
                )}
              </span>
            </div>
          </div>

          ${
            S.role === 'inspector'
              ? `
                <div class="scoreHidden">
                  ${I('eye-off')}

                  <b>
                    ${t(
                      'النتيجة غير ظاهرة للمفتش',
                      'Score hidden from inspector'
                    )}
                  </b>

                  <span>
                    ${t(
                      'تُحسب وتحفظ للنظام عند الإرسال دون منح المفتش صلاحية النتائج والتحليلات',
                      'Calculated and stored on submit without granting results or analytics access'
                    )}
                  </span>
                </div>
              `
              : scoreRing()
          }
        </div>

        <div>
          <div class="card">
            <div class="cardHead">
              <div>
                <h3 class="cardTitle">
                  ${t(
                    'المحور 1 — الانضباط والإجراءات',
                    'Section 1 — Discipline & Procedures'
                  )}
                </h3>

                <p class="sub">
                  ${t(
                    'لا ينطبق يستبعد من البسط والمقام',
                    'N/A is excluded from numerator and denominator'
                  )}
                </p>
              </div>

              ${B(
                t(
                  '4 بنود',
                  '4 items'
                ),
                'info'
              )}
            </div>

            ${question(
              'a',
              'سلامة بوابات الدخول',
              'Entrance gate safety',
              'التأكد من إغلاق البوابات وتشغيل أنظمة التحكم',
              'Verify gates are secured and access control works',
              10
            )}

            ${question(
              'b',
              'اكتمال سجل الزوار',
              'Visitor log completeness',
              'تسجيل جميع الزوار والتحقق من الهوية',
              'All visitors are recorded and identities checked',
              20
            )}

            ${question(
              'c',
              'جاهزية جهاز التفتيش',
              'Inspection device readiness',
              'حالة الجهاز ومعايرته قبل بداية الوردية',
              'Device condition and calibration before shift',
              30
            )}

            ${question(
              'd',
              'وضوح مخارج الطوارئ',
              'Emergency exit visibility',
              'عدم وجود عوائق وسلامة الإضاءة الإرشادية',
              'No obstruction and signage lighting works',
              40
            )}
          </div>

          <div
            class="grid2"
            style="margin-top:14px"
          >
            <div class="card">
              <div class="cardHead">
                <div>
                  <h3 class="cardTitle">
                    ${t(
                      'الأدلة والمرفقات',
                      'Evidence & attachments'
                    )}
                  </h3>

                  <p class="sub">
                    ${t(
                      'مرتبطة بالبند والمخالفة والزيارة والمشروع',
                      'Linked to item finding visit and project'
                    )}
                  </p>
                </div>
              </div>

              <label
                class="drop"
                for="fileInput"
              >
                ${I('cloud-upload')}

                <b>
                  ${t(
                    'التقاط أو رفع صورة أو فيديو أو مستند',
                    'Capture or upload image video or document'
                  )}
                </b>

                <span>
                  JPG · PNG · WebP · HEIC · MP4 · MOV · PDF · DOCX · XLSX
                </span>

                <input
                  id="fileInput"
                  hidden
                  type="file"
                  multiple
                  accept="image/*,video/*,.pdf,.docx,.xlsx"
                  onchange="fileDemo(this)"
                >
              </label>

              <div
                id="fileList"
                class="list"
                style="margin-top:9px"
              ></div>
            </div>

            <div class="card">
              <div class="cardHead">
                <div>
                  <h3 class="cardTitle">
                    ${t(
                      'الحراس الحاضرون',
                      'Guards present'
                    )}
                  </h3>

                  <p class="sub">
                    ${t(
                      'تقييم مستقل بجانب تقييم الموقع',
                      'Separate guard evaluation alongside site inspection'
                    )}
                  </p>
                </div>

                <button
                  class="btn"
                  onclick="guardEval()"
                >
                  ${I('user-round-check')}

                  ${t(
                    'تقييم',
                    'Evaluate'
                  )}
                </button>
              </div>

              ${listItem(
                'shield',
                t(
                  'محمد العتيبي',
                  'Mohammed Al Otaibi'
                ),
                `EMP-1042 · ${t(
                  'بوابة رئيسية',
                  'Main gate'
                )}`,
                B(
                  '92%',
                  'success'
                )
              )}

              ${listItem(
                'shield',
                t(
                  'سعد القحطاني',
                  'Saad Al Qahtani'
                ),
                `EMP-1088 · ${t(
                  'دورية داخلية',
                  'Internal patrol'
                )}`,
                B(
                  '86%',
                  'info'
                )
              )}
            </div>
          </div>

          ${
            Object
              .values(S.answers)
              .includes('fail')
              ? findingClassificationPanel()
              : ''
          }

          <div
            style="
              display:flex;
              gap:8px;
              justify-content:flex-end;
              margin-top:14px;
              flex-wrap:wrap
            "
          >
            <button
              class="btn"
              onclick="saveDraft()"
            >
              ${I('save')}

              ${t(
                'حفظ مسودة',
                'Save draft'
              )}
            </button>

            <button
              class="btn primary"
              onclick="submitInspection()"
            >
              ${I('send')}

              ${t(
                'إرسال للمراجعة',
                'Submit for review'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function review() {
  const labels = {
    pending: t(
      'بانتظار المراجعة',
      'Pending review'
    ),

    returned: t(
      'معاد للاستكمال',
      'Returned for completion'
    ),

    approved: t(
      'معتمد',
      'Approved'
    ),

    rejected: t(
      'مرفوض',
      'Rejected'
    )
  };

  const label =
    labels[S.reviewState];

  return `
    <div class="view">
      ${toolbar(
        'المراجعة والاعتماد والرفض',
        'Review Approval & Rejection',
        'المراجعة منفصلة عن الاعتماد والإعادة والرفض يتطلبان سببًا',
        'Review is separate from approval and return or rejection require a reason',
        ''
      )}

      <div class="grid2">
        <div class="card">
          <div class="cardHead">
            <div>
              <h3 class="cardTitle">
                REP-2026-000094
              </h3>

              <p class="sub">
                ${projectName('P-001')}
                ·
                VIS-2026-000123
                ·
                v2.4
              </p>
            </div>

            ${B(
              label,
              S.reviewState === 'approved'
                ? 'success'
                : S.reviewState === 'rejected'
                  ? 'danger'
                  : S.reviewState === 'returned'
                    ? 'warning'
                    : 'info'
            )}
          </div>

          <div
            class="kpis"
            style="
              grid-template-columns:
                repeat(3,1fr)
            "
          >
            <div class="kpi">
              <b>
                ${score()}%
              </b>

              <span>
                ${t(
                  'النتيجة',
                  'Score'
                )}
              </span>
            </div>

            <div class="kpi">
              <b>4</b>

              <span>
                ${t(
                  'بنود',
                  'Items'
                )}
              </span>
            </div>

            <div class="kpi">
              <b>1</b>

              <span>
                ${t(
                  'مخالفة',
                  'Finding'
                )}
              </span>
            </div>
          </div>

          <div
            style="
              display:flex;
              gap:8px;
              flex-wrap:wrap;
              margin-top:12px
            "
          >
            ${
              S.role === 'quality_staff'
                ? `
                  <button
                    class="btn secondary"
                    onclick="decision('return')"
                  >
                    ${I('undo-2')}

                    ${t(
                      'إعادة للاستكمال',
                      'Return'
                    )}
                  </button>
                `
                : ''
            }

            ${
              S.role === 'quality_admin'
                ? `
                  <button
                    class="btn secondary"
                    onclick="decision('return')"
                  >
                    ${I('undo-2')}

                    ${t(
                      'إعادة للاستكمال',
                      'Return'
                    )}
                  </button>

                  <button
                    class="btn dangerBtn"
                    onclick="decision('reject')"
                  >
                    ${I('ban')}

                    ${t(
                      'رفض',
                      'Reject'
                    )}
                  </button>

                  <button
                    class="btn primary"
                    onclick="decision('approve')"
                  >
                    ${I('badge-check')}

                    ${t(
                      'اعتماد',
                      'Approve'
                    )}
                  </button>
                `
                : ''
            }

            ${
              S.role === 'owner'
                ? B(
                    t(
                      'عرض فقط حسب القالب الحالي',
                      'View only under current template'
                    ),
                    'neutral'
                  )
                : ''
            }
          </div>
        </div>

        <div class="card">
          <div class="cardHead">
            <div>
              <h3 class="cardTitle">
                ${t(
                  'سجل القرار التاريخي',
                  'Decision snapshot history'
                )}
              </h3>

              <p class="sub">
                ${t(
                  'الاسم والمسمى والتاريخ والوقت والسبب تظل ثابتة تاريخيًا',
                  'Name title date time and reason remain historically frozen'
                )}
              </p>
            </div>
          </div>

          <div class="timeline">
            <div class="tl">
              <b>
                ${t(
                  'إرسال التفتيش',
                  'Inspection submitted'
                )}
              </b>

              <p>
                ${t(
                  'خالد السالم · مفتش جودة · 04 أكتوبر 10:31',
                  'Khaled Al Salem · Quality Inspector · 04 Oct 10:31'
                )}
              </p>
            </div>

            <div class="tl">
              <b>
                ${t(
                  'بدأت المراجعة',
                  'Review started'
                )}
              </b>

              <p>
                ${t(
                  'سارة محمد · موظف جودة · 04 أكتوبر 10:40',
                  'Sarah Mohammed · Quality Officer · 04 Oct 10:40'
                )}
              </p>
            </div>

            <div class="tl">
              <b>
                ${t(
                  'آخر قرار',
                  'Latest decision'
                )}
              </b>

              <p id="decisionHistory">
                ${t(
                  'لا يوجد قرار نهائي بعد',
                  'No final decision yet'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function forms() {
  return `
    <div class="view">
      ${toolbar(
        'النماذج والإصدارات',
        'Forms & Versions',
        'النموذج المنشور مقفل وأي تغيير ينشئ إصدارًا جديدًا للمراجعة',
        'Published forms are immutable and any change creates a new reviewable version',
        `
          <button
            class="btn primary"
            onclick="formBuilder()"
          >
            ${I('plus')}

            ${t(
              'نموذج جديد',
              'New form'
            )}
          </button>
        `
      )}

      <div class="grid2">
        <div class="card">
          <div class="cardHead">
            <div>
              <h3 class="cardTitle">
                ${t(
                  'نموذج التفتيش الدوري',
                  'Routine Inspection Form'
                )}
              </h3>

              <p class="sub">
                ${t(
                  '42 بندًا · مرتبط بالمشروع ونوع التفتيش',
                  '42 items · scoped by project and inspection type'
                )}
              </p>
            </div>

            ${B(
              t(
                'منشور',
                'Published'
              ),
              'success'
            )}
          </div>

          <div class="version">
            <div class="vno">
              v2.4
            </div>

            <div class="vmain">
              <b>
                ${t(
                  'الإصدار الحالي',
                  'Current version'
                )}
              </b>

              <span>
                ${t(
                  'منشور ومقفل · 01 أكتوبر 2026',
                  'Published & locked · 01 Oct 2026'
                )}
              </span>
            </div>

            ${B(
              t(
                'نشط',
                'Active'
              ),
              'success'
            )}
          </div>

          <div class="version">
            <div class="vno">
              v2.3
            </div>

            <div class="vmain">
              <b>
                ${t(
                  'الإصدار السابق',
                  'Previous version'
                )}
              </b>

              <span>
                ${t(
                  'استخدم في 28 زيارة ولا يتغير',
                  'Used in 28 visits and remains immutable'
                )}
              </span>
            </div>

            ${B(
              t(
                'مؤرشف',
                'Archived'
              ),
              'neutral'
            )}
          </div>

          <button
            class="btn secondary"
            onclick="
              toast(
                t(
                  'تم إنشاء v2.5 كمسودة دون تغيير v2.4',
                  'Created v2.5 as draft without changing v2.4'
                )
              )
            "
          >
            ${I('git-branch')}

            ${t(
              'إنشاء إصدار جديد',
              'Create new version'
            )}
          </button>
        </div>

        <div class="card">
          <div class="cardHead">
            <div>
              <h3 class="cardTitle">
                ${t(
                  'اختبار ثبات النتائج السابقة',
                  'Historical result integrity test'
                )}
              </h3>

              <p class="sub">
                ${t(
                  'الزيارة القديمة تحتفظ بالنص والوزن والنتيجة بعد نشر إصدار جديد',
                  'Old visits keep item text weights and score after publishing a new version'
                )}
              </p>
            </div>
          </div>

          ${listItem(
            'file-check-2',
            'REP-2026-000089 · v2.3',
            t(
              'الوزن التاريخي محفوظ · النتيجة 88%',
              'Historical weights frozen · score 88%'
            ),
            B(
              t(
                'ثابت',
                'Frozen'
              ),
              'success'
            )
          )}

          ${listItem(
            'file-check-2',
            'REP-2026-000094 · v2.4',
            t(
              'الإصدار الحالي · النتيجة 92%',
              'Current version · score 92%'
            ),
            B(
              t(
                'ثابت',
                'Frozen'
              ),
              'success'
            )
          )}

          <div
            class="sensitive"
            style="margin-top:12px"
          >
            ${I('lock')}

            <div>
              <b>
                ${t(
                  'قاعدة تاريخية',
                  'Historical rule'
                )}
              </b>

              <p>
                ${t(
                  'كل إجابة تحفظ نص البند والوزن وإصدار النموذج وقت الزيارة والنتيجة النهائية عند الإرسال',
                  'Each answer stores item text weight form version and final submitted score'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function guards() {
  let rows = [
    [
      'محمد العتيبي',
      'Mohammed Al Otaibi',
      'EMP-1042',
      '***6789',
      'P-001',
      '92%',
      '1'
    ],

    [
      'سعد القحطاني',
      'Saad Al Qahtani',
      'EMP-1088',
      '***1312',
      'P-001',
      '86%',
      '0'
    ],

    [
      'ناصر الحربي',
      'Nasser Al Harbi',
      'EMP-2043',
      '***4401',
      'P-002',
      '79%',
      '3'
    ]
  ];

  if (
    [
      'project_manager',
      'guard_supervisor'
    ].includes(S.role)
  ) {
    rows = rows.filter(
      row => row[4] === 'P-001'
    );
  }

  return `
    <div class="view">
      ${toolbar(
        'سجل الحراس والتقييم',
        'Guard Records & Evaluation',
        'التقييمات والملاحظات المتكررة والإجراءات والتدريب مرتبطة بسجل الموظف',
        'Evaluations repeated findings actions and training are linked to employee history',
        [
          'owner',
          'quality_admin'
        ].includes(S.role)
          ? `
            <button class="btn">
              ${I('file-up')}

              ${t(
                'استيراد Excel',
                'Import Excel'
              )}
            </button>
          `
          : ''
      )}

      <div class="card">
        <div class="table">
          <table>
            <thead>
              <tr>
                <th>
                  ${t(
                    'الحارس',
                    'Guard'
                  )}
                </th>

                <th>
                  ${t(
                    'الرقم الوظيفي',
                    'Employee no.'
                  )}
                </th>

                <th>
                  ${t(
                    'الهوية',
                    'ID'
                  )}
                </th>

                <th>
                  ${t(
                    'المشروع',
                    'Project'
                  )}
                </th>

                <th>
                  ${t(
                    'آخر تقييم',
                    'Last evaluation'
                  )}
                </th>

                <th>
                  ${t(
                    'تكرار الملاحظة',
                    'Repeated findings'
                  )}
                </th>

                <th></th>
              </tr>
            </thead>

            <tbody>
              ${rows
                .map(row => {
                  return `
                    <tr>
                      <td>
                        <b>
                          ${t(
                            row[0],
                            row[1]
                          )}
                        </b>
                      </td>

                      <td>
                        ${row[2]}
                      </td>

                      <td>
                        ${row[3]}
                      </td>

                      <td>
                        ${projectName(
                          row[4]
                        )}
                      </td>

                      <td>
                        ${B(
                          row[5],
                          parseInt(
                            row[5]
                          ) >= 85
                            ? 'success'
                            : 'warning'
                        )}
                      </td>

                      <td>
                        ${row[6]}
                      </td>

                      <td>
                        <button
                          class="btn"
                          onclick="guardProfile('${t(
                            row[0],
                            row[1]
                          )}')"
                        >
                          ${t(
                            'فتح السجل',
                            'Open record'
                          )}
                        </button>
                      </td>
                    </tr>
                  `;
                })
                .join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function actions() {
  let rows = [
    {
      id: 'CAPA-2026-0041',
      finding: t(
        'بوابة الطوارئ',
        'Emergency gate'
      ),
      project: 'P-001',
      severity: t(
        'حرجة',
        'Critical'
      ),
      kind: t(
        'حالة فورية',
        'Immediate'
      ),
      age: 10,
      status: t(
        'متأخر',
        'Overdue'
      )
    },

    {
      id: 'CAPA-2026-0044',
      finding: t(
        'سجل الزوار',
        'Visitor log'
      ),
      project: 'P-002',
      severity: t(
        'متوسطة',
        'Medium'
      ),
      kind: t(
        'معالجة خلال مدة',
        'Time-bound'
      ),
      age: 4,
      status: t(
        'قيد المعالجة',
        'In progress'
      )
    },

    {
      id: 'CAPA-2026-0038',
      finding: t(
        'مخرج الطوارئ',
        'Emergency exit'
      ),
      project: 'P-001',
      severity: t(
        'عالية',
        'High'
      ),
      kind: t(
        'تحسين طويل المدى',
        'Long-term'
      ),
      age: 7,
      status: t(
        'بانتظار المراجعة',
        'Pending review'
      )
    }
  ];

  if (
    S.role === 'project_manager'
  ) {
    rows = rows.filter(
      row => row.project === 'P-001'
    );
  }

  return `
    <div class="view">
      ${toolbar(
        'الملاحظات والإجراءات والتصعيد',
        'Findings Corrective Actions & Escalation',
        'تصنيف الملاحظات مع تصعيد 3 ثم 6 ثم 9 أيام ثم الإدارة العليا وبريد في كل مرحلة',
        'Finding classification with 3 6 9 day escalation then Senior Management and email at each stage',
        S.role === 'quality_admin'
          ? `
            <button
              class="btn primary"
              onclick="escalationSettings()"
            >
              ${I('settings-2')}

              ${t(
                'إعداد سياسة التصعيد',
                'Escalation policy'
              )}
            </button>
          `
          : ''
      )}

      <div class="grid3 escalationCards">
        <div class="escalationCard yellow">
          <div>
            ${I('clock-3')}

            <b>
              ${t(
                'بعد 3 أيام',
                'After 3 days'
              )}
            </b>
          </div>

          <span>
            ${t(
              'أصفر + بريد للمسؤول وإدارة المشروع',
              'Yellow + email to owner and Project Management'
            )}
          </span>
        </div>

        <div class="escalationCard orange">
          <div>
            ${I('clock-alert')}

            <b>
              ${t(
                'بعد 6 أيام',
                'After 6 days'
              )}
            </b>
          </div>

          <span>
            ${t(
              'برتقالي + بريد متابعة',
              'Orange + follow-up email'
            )}
          </span>
        </div>

        <div class="escalationCard red">
          <div>
            ${I('siren')}

            <b>
              ${t(
                'بعد 9 أيام',
                'After 9 days'
              )}
            </b>
          </div>

          <span>
            ${t(
              'أحمر ثم تصعيد للإدارة العليا + بريد',
              'Red then Senior Management escalation + email'
            )}
          </span>
        </div>
      </div>

      <div class="policyBar">
        ${I('calendar-clock')}

        <div>
          <b>
            ${t(
              'سياسة الاحتساب الحالية في الديمو',
              'Current demo counting policy'
            )}
          </b>

          <span>
            ${t(
              `البداية من ${
                S.escalationStart ===
                'finding_created'
                  ? 'تسجيل الملاحظة'
                  : 'تاريخ الاستحقاق'
              } · ${
                S.escalationBasis ===
                'calendar'
                  ? 'أيام تقويمية'
                  : 'أيام عمل'
              } · تثبت نهائيًا قبل التنفيذ`,
              `Starts from ${
                S.escalationStart ===
                'finding_created'
                  ? 'finding creation'
                  : 'due date'
              } · ${
                S.escalationBasis ===
                'calendar'
                  ? 'calendar days'
                  : 'business days'
              } · finalized before implementation`
            )}
          </span>
        </div>
      </div>

      <div class="stats">
        ${stat(
          'circle-dot',
          'مفتوحة',
          'Open',
          '9',
          t(
            '3 جديدة',
            '3 new'
          )
        )}

        ${stat(
          'clock-alert',
          'متأخرة',
          'Overdue',
          '3',
          t(
            'تحتاج متابعة',
            'Need follow-up'
          ),
          'red'
        )}

        ${stat(
          'repeat-2',
          'متكررة',
          'Repeated',
          '4',
          t(
            'خلال 30 يوم',
            'In 30 days'
          ),
          'gold'
        )}

        ${stat(
          'circle-check-big',
          'مغلقة',
          'Closed',
          '27',
          t(
            '+6 هذا الشهر',
            '+6 this month'
          ),
          'blue'
        )}
      </div>

      <div class="card">
        <div class="table">
          <table>
            <thead>
              <tr>
                <th>
                  ${t(
                    'الرقم',
                    'Reference'
                  )}
                </th>

                <th>
                  ${t(
                    'الملاحظة',
                    'Finding'
                  )}
                </th>

                <th>
                  ${t(
                    'التصنيف',
                    'Class'
                  )}
                </th>

                <th>
                  ${t(
                    'الخطورة',
                    'Severity'
                  )}
                </th>

                <th>
                  ${t(
                    'العمر',
                    'Age'
                  )}
                </th>

                <th>
                  ${t(
                    'التصعيد',
                    'Escalation'
                  )}
                </th>

                <th>
                  ${t(
                    'الحالة',
                    'Status'
                  )}
                </th>

                <th></th>
              </tr>
            </thead>

            <tbody>
              ${rows
                .map(row => {
                  let escalation;

                  if (row.age >= 9) {
                    escalation = B(
                      t(
                        'أحمر · إدارة عليا',
                        'Red · Senior Management'
                      ),
                      'danger'
                    );
                  } else if (
                    row.age >= 6
                  ) {
                    escalation = `
                      <span class="badge escalationOrange">
                        ${t(
                          'برتقالي',
                          'Orange'
                        )}
                      </span>
                    `;
                  } else if (
                    row.age >= 3
                  ) {
                    escalation = `
                      <span class="badge escalationYellow">
                        ${t(
                          'أصفر',
                          'Yellow'
                        )}
                      </span>
                    `;
                  } else {
                    escalation = B(
                      t(
                        'طبيعي',
                        'Normal'
                      ),
                      'success'
                    );
                  }

                  return `
                    <tr>
                      <td>
                        ${row.id}
                      </td>

                      <td>
                        ${row.finding}

                        <small class="tableSub">
                          ${projectName(
                            row.project
                          )}
                        </small>
                      </td>

                      <td>
                        ${row.kind}
                      </td>

                      <td>
                        ${B(
                          row.severity,
                          row.severity ===
                            t(
                              'حرجة',
                              'Critical'
                            )
                            ? 'danger'
                            : row.severity ===
                              t(
                                'عالية',
                                'High'
                              )
                              ? 'warning'
                              : 'info'
                        )}
                      </td>

                      <td>
                        ${row.age}
                        ${t(
                          'يوم',
                          'days'
                        )}
                      </td>

                      <td>
                        ${escalation}
                      </td>

                      <td>
                        ${B(
                          row.status,
                          row.status ===
                            t(
                              'متأخر',
                              'Overdue'
                            )
                            ? 'danger'
                            : 'warning'
                        )}
                      </td>

                      <td>
                        <button
                          class="btn"
                          onclick="actionModal('${row.id}')"
                        >
                          ${t(
                            'التفاصيل',
                            'Details'
                          )}
                        </button>
                      </td>
                    </tr>
                  `;
                })
                .join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function training() {
  return `
    <div class="view">
      ${toolbar(
        'طلبات الدورات التدريبية',
        'Training Requests',
        'المسار هو مشرف الحراس ثم مدير المشروع ثم إدارة الجودة ثم إثبات الإتمام',
        'Flow is Guard Supervisor then Project Manager then Quality Management then completion evidence',
        S.role === 'guard_supervisor'
          ? `
            <button
              class="btn primary"
              onclick="trainingModal()"
            >
              ${I('plus')}

              ${t(
                'طلب دورة',
                'Request training'
              )}
            </button>
          `
          : ''
      )}

      <div class="card">
        <div class="timeline">
          <div class="tl">
            <b>
              TRN-2026-0018
              ·
              ${t(
                'إدارة الحشود',
                'Crowd Management'
              )}
            </b>

            <p>
              ${t(
                'رفع بواسطة مشرف الحراس · محمد العتيبي · مرتبط بتقييم 81%',
                'Raised by Guard Supervisor · Mohammed Al Otaibi · linked to 81% evaluation'
              )}
            </p>

            ${B(
              t(
                'بانتظار مدير المشروع',
                'Pending Project Manager'
              ),
              'warning'
            )}
          </div>

          <div class="tl">
            <b>
              TRN-2026-0015
              ·
              ${t(
                'الاستجابة للطوارئ',
                'Emergency Response'
              )}
            </b>

            <p>
              ${t(
                'وافق مدير المشروع · انتقل تلقائيًا لإدارة الجودة',
                'Project Manager approved · automatically escalated to Quality Management'
              )}
            </p>

            ${B(
              t(
                'عند إدارة الجودة',
                'At Quality Management'
              ),
              'info'
            )}
          </div>

          <div class="tl">
            <b>
              TRN-2026-0009
              ·
              ${t(
                'التعامل مع الزوار',
                'Visitor Handling'
              )}
            </b>

            <p>
              ${t(
                'اكتمل التدريب وتم رفع الشهادة وربطها بسجل الموظف',
                'Training completed and certificate linked to employee record'
              )}
            </p>

            ${B(
              t(
                'مكتمل',
                'Completed'
              ),
              'success'
            )}
          </div>
        </div>
      </div>
    </div>
  `;
}

function confidential() {
  if (S.role === 'guard') {
    return `
      <div class="view">
        <section class="hero">
          <div class="kicker">
            ${I('lock-keyhole')}

            ${t(
              'قناة خاصة',
              'Private channel'
            )}
          </div>

          <h2>
            ${t(
              'استبيان أو شكوى أو بلاغ حساس',
              'Survey complaint or sensitive report'
            )}
          </h2>

          <p>
            ${t(
              'لا يظهر المحتوى في البحث العام أو تقارير المشاريع ولا يطلع عليه إلا الأشخاص الذين يحددهم مالك النظام',
              'Content is excluded from general search and project reports and only owner-authorized people can access it'
            )}
          </p>
        </section>

        <div
          class="grid2"
          style="margin-top:14px"
        >
          <div class="card">
            <div class="formGrid">
              <div class="field">
                <label>
                  ${t(
                    'النوع',
                    'Type'
                  )}
                </label>

                <select class="select">
                  <option>
                    ${t(
                      'بلاغ حساس',
                      'Sensitive report'
                    )}
                  </option>

                  <option>
                    ${t(
                      'شكوى',
                      'Complaint'
                    )}
                  </option>

                  <option>
                    ${t(
                      'استبيان',
                      'Survey'
                    )}
                  </option>
                </select>
              </div>

              <div class="field">
                <label>
                  ${t(
                    'الموضوع',
                    'Subject'
                  )}
                </label>

                <input
                  class="input"
                  placeholder="${t(
                    'عنوان مختصر',
                    'Short subject'
                  )}"
                >
              </div>

              <div class="field span2">
                <label>
                  ${t(
                    'التفاصيل',
                    'Details'
                  )}
                </label>

                <textarea
                  class="textarea"
                ></textarea>
              </div>

              <div class="span2">
                <button
                  class="btn primary"
                  onclick="
                    toast(
                      t(
                        'تم إرسال البلاغ إلى القناة الخاصة',
                        'Report sent to private channel'
                      )
                    )
                  "
                >
                  ${I('shield-check')}

                  ${t(
                    'إرسال بأمان',
                    'Send securely'
                  )}
                </button>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="cardHead">
              <div>
                <h3 class="cardTitle">
                  ${t(
                    'بلاغاتي فقط',
                    'My reports only'
                  )}
                </h3>

                <p class="sub">
                  ${t(
                    'الحارس لا يرى بلاغات الآخرين',
                    'Guard cannot see other users reports'
                  )}
                </p>
              </div>
            </div>

            ${listItem(
              'lock',
              'SEC-2026-0012',
              t(
                'يوجد رد جديد بدون كشف المحتوى في الإشعار',
                'New reply without exposing content in notification'
              ),
              B(
                t(
                  'قيد المتابعة',
                  'In progress'
                ),
                'info'
              )
            )}
          </div>
        </div>
      </div>
    `;
  }

  const granted =
    S.sensitiveGranted.filter(
      role => role !== 'owner'
    );

  return `
    <div class="view">
      ${toolbar(
        'البلاغات الحساسة',
        'Sensitive Reports',
        'صلاحية مستقلة عن المسمى الوظيفي ولا يمنحها أو يسحبها إلا مالك النظام',
        'Independent from job role and only System Owner may grant or revoke access',
        ''
      )}

      <div class="sensitive">
        ${I('shield-alert')}

        <div>
          <b>
            ${t(
              'لا توجد صلاحية تلقائية لأي دور إداري',
              'No administrative role receives automatic access'
            )}
          </b>

          <p>
            ${t(
              'إدارة الجودة ومدير المشروع والمشرف وموظف الجودة ومدير النظام لا يشاهدون البلاغات إلا إذا منحهم المالك تصريحًا مستقلًا',
              'Quality Management Project Manager Supervisor Quality Officer and administrators cannot access sensitive reports unless independently authorized by the owner'
            )}
          </p>
        </div>
      </div>

      <div
        class="grid2"
        style="margin-top:14px"
      >
        <div class="card">
          <div class="cardHead">
            <div>
              <h3 class="cardTitle">
                ${t(
                  'الأشخاص المخولون',
                  'Authorized people'
                )}
              </h3>

              <p class="sub">
                ${t(
                  'المالك فقط يستطيع التعديل',
                  'Owner only can change access'
                )}
              </p>
            </div>
          </div>

          ${listItem(
            'user-lock',
            t(
              'سلطان ا',
              'Sultan A.'
            ),
            t(
              'مالك النظام · اطلاع ورد وإغلاق',
              'System Owner · view reply close'
            ),
            B(
              t(
                'مخول',
                'Authorized'
              ),
              'success'
            )
          )}

          ${granted
            .map(role => {
              return listItem(
                'user-lock',
                t(
                  ROLE_META[role].ar,
                  ROLE_META[role].en
                ),
                t(
                  'تصريح مستقل',
                  'Independent permission'
                ),
                B(
                  t(
                    'مخول',
                    'Authorized'
                  ),
                  'success'
                )
              );
            })
            .join('')}

          ${
            S.role === 'owner'
              ? `
                <div
                  class="field"
                  style="margin-top:12px"
                >
                  <label>
                    ${t(
                      'منح أو سحب تصريح مستقل',
                      'Grant or revoke independent access'
                    )}
                  </label>

                  <select
                    id="grantRole"
                    class="select"
                  >
                    <option value="quality_staff">
                      ${t(
                        'موظف الجودة',
                        'Quality Officer'
                      )}
                    </option>

                    <option value="project_manager">
                      ${t(
                        'مدير المشروع',
                        'Project Manager'
                      )}
                    </option>

                    <option value="inspector">
                      ${t(
                        'مفتش الجودة',
                        'Quality Inspector'
                      )}
                    </option>

                    <option value="guard_supervisor">
                      ${t(
                        'مشرف الحراس',
                        'Guard Supervisor'
                      )}
                    </option>
                  </select>
                </div>

                <div
                  style="
                    display:flex;
                    gap:7px;
                    margin-top:8px
                  "
                >
                  <button
                    class="btn primary"
                    onclick="grantSensitive()"
                  >
                    ${t(
                      'منح',
                      'Grant'
                    )}
                  </button>

                  <button
                    class="btn dangerBtn"
                    onclick="revokeSensitive()"
                  >
                    ${t(
                      'سحب',
                      'Revoke'
                    )}
                  </button>
                </div>
              `
              : `
                <div
                  class="policyHint"
                  style="margin-top:10px"
                >
                  ${I('lock')}

                  ${t(
                    'هذا الحساب لا يستطيع منح الصلاحية لنفسه أو لغيره',
                    'This account cannot grant sensitive access to itself or others'
                  )}
                </div>
              `
          }
        </div>

        <div class="card">
          <div class="cardHead">
            <div>
              <h3 class="cardTitle">
                ${t(
                  'سجل الاطلاع المحمي',
                  'Protected access log'
                )}
              </h3>

              <p class="sub">
                ${t(
                  'كل فتح ورد وتغيير حالة موثق',
                  'Every open reply and status change is logged'
                )}
              </p>
            </div>
          </div>

          <div class="timeline">
            <div class="tl">
              <b>
                ${t(
                  'عرض البلاغ SEC-2026-0012',
                  'Opened SEC-2026-0012'
                )}
              </b>

              <p>
                ${t(
                  'سلطان ا · 11:04 · IP محفوظ',
                  'Sultan A. · 11:04 · IP stored'
                )}
              </p>
            </div>

            <div class="tl">
              <b>
                ${t(
                  'إضافة رد داخلي',
                  'Internal reply added'
                )}
              </b>

              <p>
                ${t(
                  'محتوى البلاغ لا يظهر في الإشعار العام',
                  'Sensitive content never appears in general notifications'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function reports() {
  let rows = [
    {
      id: 'REP-2026-000094',
      project: 'P-001',
      visit: 'VIS-2026-000123',
      score: '92%',
      status: 'approved',
      own: true,
      date: '04 Oct'
    },

    {
      id: 'REP-2026-000091',
      project: 'P-002',
      visit: 'VIS-2026-000119',
      score: '81%',
      status: 'pending',
      own: false,
      date: '02 Oct'
    },

    {
      id: 'REP-2026-000089',
      project: 'P-001',
      visit: 'VIS-2026-000115',
      score: '88%',
      status: 'returned',
      own: true,
      date: '30 Sep'
    }
  ];

  if (
    S.role === 'project_manager'
  ) {
    rows = rows.filter(
      row => row.project === 'P-001'
    );
  }

  if (S.role === 'inspector') {
    rows = rows.filter(
      row => row.own
    );
  }

  const statusLabel = status => {
    if (status === 'approved') {
      return t(
        'معتمد',
        'Approved'
      );
    }

    if (status === 'pending') {
      return t(
        'بانتظار المراجعة',
        'Pending review'
      );
    }

    return t(
      'معاد للاستكمال',
      'Returned'
    );
  };

  return `
    <div class="view">
      ${toolbar(
        'التقارير PDF وExcel',
        'PDF & Excel Reports',
        'بيانات صاحب القرار محفوظة تاريخيًا وتنزيل التقرير المعتمد يظهر حسب الصلاحية',
        'Decision snapshot is preserved historically and approved PDF download is permission based',
        S.role === 'inspector'
          ? ''
          : `
            <button
              class="btn"
              onclick="csv()"
            >
              ${I('sheet')}

              ${t(
                'تصدير Excel / CSV',
                'Export Excel / CSV'
              )}
            </button>
          `
      )}

      <div class="card">
        <div class="table">
          <table>
            <thead>
              <tr>
                <th>
                  ${t(
                    'التقرير',
                    'Report'
                  )}
                </th>

                <th>
                  ${t(
                    'المشروع',
                    'Project'
                  )}
                </th>

                <th>
                  ${t(
                    'الزيارة',
                    'Visit'
                  )}
                </th>

                ${
                  S.role === 'inspector'
                    ? ''
                    : `
                      <th>
                        ${t(
                          'النتيجة',
                          'Score'
                        )}
                      </th>
                    `
                }

                <th>
                  ${t(
                    'الحالة',
                    'Status'
                  )}
                </th>

                <th>
                  ${t(
                    'التاريخ',
                    'Date'
                  )}
                </th>

                <th>
                  ${t(
                    'الإجراء',
                    'Action'
                  )}
                </th>
              </tr>
            </thead>

            <tbody>
              ${rows
                .map(row => {
                  return `
                    <tr>
                      <td>
                        <b>
                          ${row.id}
                        </b>
                      </td>

                      <td>
                        ${projectName(
                          row.project
                        )}
                      </td>

                      <td>
                        ${row.visit}
                      </td>

                      ${
                        S.role === 'inspector'
                          ? ''
                          : `
                            <td>
                              ${row.score}
                            </td>
                          `
                      }

                      <td>
                        ${B(
                          statusLabel(
                            row.status
                          ),
                          row.status === 'approved'
                            ? 'success'
                            : row.status === 'pending'
                              ? 'info'
                              : 'warning'
                        )}
                      </td>

                      <td>
                        ${row.date}
                      </td>

                      <td>
                        <div class="rowActions">
                          <button
                            class="btn"
                            onclick="reportModal('${row.id}','${row.status}')"
                          >
                            ${t(
                              'فتح',
                              'Open'
                            )}
                          </button>

                          ${
                            row.status === 'approved'
                              ? `
                                <button
                                  class="btn secondary"
                                  onclick="downloadApprovedReport('${row.id}')"
                                >
                                  ${I('download')}

                                  ${t(
                                    'تنزيل PDF',
                                    'Download PDF'
                                  )}
                                </button>
                              `
                              : ''
                          }
                        </div>
                      </td>
                    </tr>
                  `;
                })
                .join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
}

function scoreModel() {
  const criticalImmediate =
    Math.round(
      scorePolicy.severity.critical *
      scorePolicy.typeMultiplier.immediate
    );

  const mediumTimed =
    Math.round(
      scorePolicy.severity.medium *
      scorePolicy.typeMultiplier.timed
    );

  const example =
    Math.max(
      0,
      100 -
      criticalImmediate -
      mediumTimed
    );

  return `
    <div class="view">
      ${toolbar(
        'معادلة تقييم المشروع من 100',
        'Project Score Model out of 100',
        'مقارنة واضحة بين نسبة مطابقة الزيارة ونموذج الخصم من 100 قبل اعتماد المعادلة النهائية',
        'Clear comparison between visit compliance and 100 point deduction before final approval',
        B(
          t(
            'مقترح غير معتمد',
            'Proposal · not final'
          ),
          'warning'
        )
      )}

      <div class="grid2">
        <div class="card scoringOption">
          <div class="cardHead">
            <div>
              <h3 class="cardTitle">
                ${t(
                  'النموذج أ · نسبة المطابقة بالأوزان',
                  'Model A · Weighted compliance percentage'
                )}
              </h3>

              <p class="sub">
                ${t(
                  'يقيس مطابقة نموذج التفتيش نفسه',
                  'Measures compliance with the inspection form'
                )}
              </p>
            </div>

            ${B(
              '66.7%',
              'info'
            )}
          </div>

          <div class="formulaBox">
            ${t(
              'مجموع أوزان البنود المطابقة',
              'Compliant weights'
            )}

            ÷

            ${t(
              'مجموع أوزان البنود المنطبقة',
              'Applicable weights'
            )}

            × 100
          </div>

          <p class="explain">
            ${t(
              'مثال 10 و20 و30 و40 حيث البند 40 لا ينطبق والبند 20 غير مطابق فتكون النتيجة 40 ÷ 60 = 66.7 بالمائة',
              'Example weights 10 20 30 40 where 40 is N/A and 20 is non compliant gives 40 ÷ 60 = 66.7%'
            )}
          </p>
        </div>

        <div class="card scoringOption recommended">
          <div class="cardHead">
            <div>
              <h3 class="cardTitle">
                ${t(
                  'النموذج ب · تقييم المشروع من 100 بالخصم',
                  'Model B · 100 point project deduction score'
                )}
              </h3>

              <p class="sub">
                ${t(
                  'المطلوب الجديد ويحتاج اعتماد جدول الخصومات',
                  'New requested method and deduction matrix requires approval'
                )}
              </p>
            </div>

            ${B(
              example + '%',
              'success'
            )}
          </div>

          <div class="formulaBox">
            100
            −
            ${t(
              'مجموع الخصومات حسب نوع المخالفة وخطورتها',
              'sum of deductions by finding type and severity'
            )}
          </div>

          <div class="deductionMatrix">
            <div>
              <span>
                ${t(
                  'منخفضة',
                  'Low'
                )}
              </span>

              <b>-2</b>
            </div>

            <div>
              <span>
                ${t(
                  'متوسطة',
                  'Medium'
                )}
              </span>

              <b>-5</b>
            </div>

            <div>
              <span>
                ${t(
                  'عالية',
                  'High'
                )}
              </span>

              <b>-10</b>
            </div>

            <div>
              <span>
                ${t(
                  'حرجة',
                  'Critical'
                )}
              </span>

              <b>-20</b>
            </div>
          </div>

          <p class="explain">
            ${t(
              `مثال تجريبي فقط حالة حرجة فورية = ${criticalImmediate} خصم وحالة متوسطة بمهلة = ${mediumTimed} خصم فيصبح التقييم ${example} من 100`,
              `Demo example only critical immediate equals ${criticalImmediate} deduction and medium timed equals ${mediumTimed} giving ${example} out of 100`
            )}
          </p>

          <div class="policyHint">
            ${I('triangle-alert')}

            ${t(
              'قيم الخصم والمعاملات أمثلة للعرض فقط ولن تعتمد قبل موافقة العميل كتابة',
              'Deduction values and multipliers are demo examples only and will not be finalized without written approval'
            )}
          </div>
        </div>
      </div>

      <div
        class="card"
        style="margin-top:14px"
      >
        <div class="cardHead">
          <div>
            <h3 class="cardTitle">
              ${t(
                'الفصل المقترح بين المؤشرين',
                'Proposed separation between the two metrics'
              )}
            </h3>

            <p class="sub">
              ${t(
                'لتجنب خلط نتيجتين مختلفتين في رقم واحد بدون تعريف',
                'Avoid mixing two different concepts into one undefined score'
              )}
            </p>
          </div>
        </div>

        <div class="comparisonGrid">
          <div>
            ${I('clipboard-check')}

            <b>
              ${t(
                'نسبة مطابقة الزيارة',
                'Visit compliance'
              )}
            </b>

            <span>
              ${t(
                'تقيس أداء بنود النموذج مع استبعاد لا ينطبق',
                'Measures form compliance with N/A excluded'
              )}
            </span>
          </div>

          <div>
            ${I('gauge')}

            <b>
              ${t(
                'تقييم المشروع من 100',
                'Project score out of 100'
              )}
            </b>

            <span>
              ${t(
                'يحسب من المخالفات المعتمدة ونوعها وخطورتها وفق جدول خصم معتمد',
                'Calculated from approved findings using an agreed deduction matrix'
              )}
            </span>
          </div>
        </div>

        <p
          class="sub"
          style="margin-top:12px"
        >
          ${t(
            'قبل البرمجة النهائية يجب اعتماد قيم الخصم وحدودها وتأثير التكرار وهل المؤشر الرسمي يكون الخصم فقط أم يظهر المؤشران معًا',
            'Before production build approve deduction values caps recurrence treatment and whether one or both metrics are official'
          )}
        </p>
      </div>
    </div>
  `;
}

function analytics() {
  const data =
    S.role === 'project_manager'
      ? projects.filter(
          project => project.id === 'P-001'
        )
      : projects;

  const employees =
    data.reduce(
      (
        total,
        project
      ) => {
        return (
          total +
          project.employees
        );
      },
      0
    );

  const findings =
    data.reduce(
      (
        total,
        project
      ) => {
        return (
          total +
          project.findings
        );
      },
      0
    );

  const ratio =
    (
      findings /
      employees *
      100
    ).toFixed(1);

  const avgClose =
    (
      data.reduce(
        (
          total,
          project
        ) => {
          return (
            total +
            project.avgClose
          );
        },
        0
      ) /
      data.length
    ).toFixed(1);

  const complaints =
    data.reduce(
      (
        total,
        project
      ) => {
        return (
          total +
          project.complaints
        );
      },
      0
    );

  const nearestContract =
    Math.min(
      ...data.map(
        project =>
          project.contractDays
      )
    );

  return `
    <div class="view">
      ${toolbar(
        'التحليلات والتقارير داخل النظام',
        'In-app Analytics & Reports',
        'التحليلات داخل النظام بدون Power BI أو اشتراك تحليل إضافي',
        'Analytics are built in-app without Power BI or extra analytics subscription',
        `
          <div class="filterGroup">
            <select class="select small">
              <option>
                ${
                  S.role === 'project_manager'
                    ? projectName('P-001')
                    : t(
                        'كل المشاريع',
                        'All projects'
                      )
                }
              </option>
            </select>

            <select class="select small">
              <option>
                ${t(
                  'يومي',
                  'Daily'
                )}
              </option>

              <option>
                ${t(
                  'أسبوعي',
                  'Weekly'
                )}
              </option>

              <option selected>
                ${t(
                  'شهري',
                  'Monthly'
                )}
              </option>

              <option>
                ${t(
                  'سنوي',
                  'Yearly'
                )}
              </option>

              <option>
                ${t(
                  'فترة مخصصة',
                  'Custom'
                )}
              </option>
            </select>
          </div>
        `
      )}

      <div class="kpis analyticsKpis">
        <div class="kpi">
          <b>88%</b>

          <span>
            ${t(
              'متوسط الالتزام',
              'Compliance'
            )}
          </span>
        </div>

        <div class="kpi">
          <b>
            ${ratio}%
          </b>

          <span>
            ${t(
              'الملاحظات إلى الموظفين',
              'Findings / employees'
            )}
          </span>
        </div>

        <div class="kpi">
          <b>
            ${avgClose}
          </b>

          <span>
            ${t(
              'متوسط أيام الإغلاق',
              'Avg closure days'
            )}
          </span>
        </div>

        <div class="kpi">
          <b>
            ${complaints}
          </b>

          <span>
            ${t(
              'الشكاوى',
              'Complaints'
            )}
          </span>
        </div>

        <div
          class="
            kpi
            ${
              nearestContract <= 30
                ? 'kpiDanger'
                : ''
            }
          "
        >
          <b>
            ${nearestContract}
          </b>

          <span>
            ${t(
              'يوم لأقرب عقد',
              'days to nearest contract expiry'
            )}
          </span>
        </div>
      </div>

      <div class="grid2">
        <div class="card">
          <div class="cardHead">
            <div>
              <h3 class="cardTitle">
                ${t(
                  'اتجاه التحسن',
                  'Improvement trend'
                )}
              </h3>

              <p class="sub">
                ${t(
                  'الضغط على العمود يفتح الحالات التي كونت الرقم',
                  'Click a bar to drill into cases behind the number'
                )}
              </p>
            </div>
          </div>

          <div class="chart">
            ${[
              66,
              71,
              79,
              75,
              86,
              92
            ]
              .map(
                (
                  height,
                  index
                ) => {
                  const arMonths = [
                    'مايو',
                    'يونيو',
                    'يوليو',
                    'أغسطس',
                    'سبتمبر',
                    'أكتوبر'
                  ];

                  const enMonths = [
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct'
                  ];

                  return `
                    <div class="barCol">
                      <div
                        class="
                          bar
                          ${
                            index === 5
                              ? 'gold'
                              : ''
                          }
                        "
                        style="
                          height:${height}%
                        "
                        onclick="
                          toast(
                            t(
                              'فتح تفاصيل الزيارات والحالات لهذه الفترة',
                              'Opening visits and cases for this period'
                            )
                          )
                        "
                      ></div>

                      <span>
                        ${t(
                          arMonths[index],
                          enMonths[index]
                        )}
                      </span>
                    </div>
                  `;
                }
              )
              .join('')}
          </div>
        </div>

        <div class="card">
          <div class="cardHead">
            <div>
              <h3 class="cardTitle">
                ${t(
                  'الملاحظات الأكثر تكرارًا',
                  'Most repeated findings'
                )}
              </h3>

              <p class="sub">
                ${t(
                  'البلاغات الحساسة مستبعدة بالكامل من التحليلات',
                  'Sensitive reports are excluded from analytics'
                )}
              </p>
            </div>
          </div>

          ${[
            [
              'سجل الزوار',
              'Visitor log',
              12,
              82
            ],

            [
              'بوابات الطوارئ',
              'Emergency gates',
              8,
              62
            ],

            [
              'جولات الحراسة',
              'Guard patrols',
              6,
              48
            ],

            [
              'الزي الرسمي',
              'Uniform',
              4,
              34
            ]
          ]
            .map(item => {
              return `
                <div
                  style="
                    margin-bottom:10px
                  "
                >
                  <div
                    style="
                      display:flex;
                      justify-content:space-between;
                      font-size:10px
                    "
                  >
                    <span>
                      ${t(
                        item[0],
                        item[1]
                      )}
                    </span>

                    <span>
                      ${item[2]}
                      ${t(
                        'حالة',
                        'cases'
                      )}
                    </span>
                  </div>

                  <div class="progress">
                    <span
                      style="
                        width:${item[3]}%
                      "
                    ></span>
                  </div>
                </div>
              `;
            })
            .join('')}
        </div>
      </div>

      <div
        class="card"
        style="margin-top:14px"
      >
        <div class="cardHead">
          <div>
            <h3 class="cardTitle">
              ${t(
                'ترتيب المشاريع متعدد المؤشرات',
                'Multi-metric project ranking'
              )}
            </h3>

            <p class="sub">
              ${t(
                'حسب عدد الملاحظات والتحسن والشكاوى وقرب انتهاء العقد ومدة الإغلاق',
                'By findings improvement complaints contract expiry and closure time'
              )}
            </p>
          </div>
        </div>

        <div class="table">
          <table>
            <thead>
              <tr>
                <th>
                  ${t(
                    'المشروع',
                    'Project'
                  )}
                </th>

                <th>
                  ${t(
                    'الموظفون',
                    'Employees'
                  )}
                </th>

                <th>
                  ${t(
                    'الملاحظات',
                    'Findings'
                  )}
                </th>

                <th>
                  ${t(
                    'النسبة للموظفين',
                    'Finding ratio'
                  )}
                </th>

                <th>
                  ${t(
                    'متوسط الإغلاق',
                    'Avg closure'
                  )}
                </th>

                <th>
                  ${t(
                    'التحسن',
                    'Improvement'
                  )}
                </th>

                <th>
                  ${t(
                    'الشكاوى',
                    'Complaints'
                  )}
                </th>

                <th>
                  ${t(
                    'انتهاء العقد',
                    'Contract expiry'
                  )}
                </th>
              </tr>
            </thead>

            <tbody>
              ${data
                .map(project => {
                  return `
                    <tr>
                      <td>
                        <b>
                          ${
                            S.lang === 'ar'
                              ? project.ar
                              : project.en
                          }
                        </b>
                      </td>

                      <td>
                        ${project.employees}
                      </td>

                      <td>
                        ${project.findings}
                      </td>

                      <td>
                        ${(
                          project.findings /
                          project.employees *
                          100
                        ).toFixed(1)}%
                      </td>

                      <td>
                        ${project.avgClose}

                        ${t(
                          'يوم',
                          'days'
                        )}
                      </td>

                      <td>
                        +${project.improvement}%
                      </td>

                      <td>
                        ${project.complaints}
                      </td>

                      <td>
                        ${B(
                          project.contractDays +
                            ' ' +
                            t(
                              'يوم',
                              'days'
                            ),
                          project.contractDays <= 30
                            ? 'danger'
                            : project.contractDays <= 60
                              ? 'warning'
                              : 'success'
                        )}
                      </td>
                    </tr>
                  `;
                })
                .join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div
        class="grid3"
        style="margin-top:14px"
      >
        <div class="card miniReport">
          ${I('calendar-days')}

          <b>
            ${t(
              'تقرير يومي',
              'Daily report'
            )}
          </b>

          <span>
            ${t(
              'زيارات اليوم والملاحظات الحرجة والمتأخرات',
              'Today visits critical findings and overdue actions'
            )}
          </span>
        </div>

        <div class="card miniReport">
          ${I('calendar-range')}

          <b>
            ${t(
              'تقرير أسبوعي',
              'Weekly report'
            )}
          </b>

          <span>
            ${t(
              'الاتجاه والتكرار والإغلاقات والتصعيد',
              'Trend recurrence closures and escalations'
            )}
          </span>
        </div>

        <div class="card miniReport">
          ${I('calendar-check')}

          <b>
            ${t(
              'شهري وسنوي',
              'Monthly & yearly'
            )}
          </b>

          <span>
            ${t(
              'المقارنات والتحسن والشكاوى والعقود',
              'Comparisons improvement complaints and contracts'
            )}
          </span>
        </div>
      </div>
    </div>
  `;
}

function registration() {
  return `
    <div class="view">
      ${toolbar(
        'التسجيل والتعهد وتفعيل الحساب',
        'Registration Undertaking & Activation',
        'التعهد والتوقيع إلزاميان قبل تفعيل كل الحسابات حتى التي تنشئها الإدارة',
        'Undertaking and signature are mandatory before activating every account including admin created accounts',
        ''
      )}

      <div class="grid2">
        <div class="card">
          <div class="cardHead">
            <div>
              <h3 class="cardTitle">
                ${t(
                  'طلب حساب من المستخدم',
                  'User requested account'
                )}
              </h3>

              <p class="sub">
                ${t(
                  'لا يرسل الطلب بدون التعهد والتوقيع',
                  'Cannot submit without undertaking and signature'
                )}
              </p>
            </div>
          </div>

          <div class="formGrid">
            <div class="field">
              <label>
                ${t(
                  'الاسم',
                  'Name'
                )}
              </label>

              <input
                class="input"
                value="${t(
                  'عبدالله السبيعي',
                  'Abdullah Al Subaie'
                )}"
              >
            </div>

            <div class="field">
              <label>
                ${t(
                  'الرقم الوظيفي',
                  'Employee no.'
                )}
              </label>

              <input
                class="input"
                value="EMP-3012"
              >
            </div>

            <div class="field">
              <label>
                ${t(
                  'رقم الهوية',
                  'National ID'
                )}
              </label>

              <input
                class="input"
                value="109***821"
              >
            </div>

            <div class="field">
              <label>
                ${t(
                  'البريد',
                  'Email'
                )}
              </label>

              <input
                class="input"
                value="abdullah@example.test"
              >
            </div>

            <div class="field span2">
              <label>
                ${t(
                  'التعهد v1.2',
                  'Undertaking v1.2'
                )}
              </label>

              <div class="sensitive">
                <div>
                  <b>
                    ${t(
                      'أقر بصحة البيانات والالتزام بسياسات الاستخدام والسرية',
                      'I confirm the accuracy of my data and agree to confidentiality and usage policies'
                    )}
                  </b>

                  <p>
                    ${t(
                      'يحفظ إصدار التعهد وتاريخ الموافقة والتوقيع مع الطلب',
                      'Undertaking version consent time and signature are stored with the request'
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div class="field span2">
              <label>
                ${t(
                  'التوقيع الإلكتروني',
                  'Electronic signature'
                )}
              </label>

              <canvas
                id="sig"
                width="620"
                height="140"
                style="
                  width:100%;
                  height:140px;
                  background:#0b1926;
                  border:1px solid var(--line);
                  border-radius:12px;
                  touch-action:none
                "
              ></canvas>

              <div
                style="
                  display:flex;
                  gap:7px;
                  margin-top:7px
                "
              >
                <button
                  class="btn"
                  onclick="clearSig()"
                >
                  ${t(
                    'مسح',
                    'Clear'
                  )}
                </button>

                <button
                  class="btn primary"
                  onclick="submitRegistration()"
                >
                  ${I('signature')}

                  ${t(
                    'توقيع وإرسال الطلب',
                    'Sign & submit'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="cardHead">
            <div>
              <h3 class="cardTitle">
                ${t(
                  'الحساب الذي تنشئه الإدارة',
                  'Admin-created account'
                )}
              </h3>

              <p class="sub">
                ${t(
                  'لا يتفعل مباشرة بعد الإنشاء',
                  'It is not activated immediately after creation'
                )}
              </p>
            </div>
          </div>

          <div class="accountFlow">
            <div class="flowStep done">
              <span>1</span>

              <div>
                <b>
                  ${t(
                    'إنشاء سجل الحساب',
                    'Create account record'
                  )}
                </b>

                <small>
                  ${t(
                    'الدور والمشاريع محددة',
                    'Role and projects assigned'
                  )}
                </small>
              </div>
            </div>

            <div class="flowStep current">
              <span>2</span>

              <div>
                <b>
                  ${t(
                    'إرسال رابط التعهد والتوقيع',
                    'Send undertaking and signature link'
                  )}
                </b>

                <small>
                  ${t(
                    'الحساب يبقى غير مفعل',
                    'Account remains inactive'
                  )}
                </small>
              </div>
            </div>

            <div class="flowStep">
              <span>3</span>

              <div>
                <b>
                  ${t(
                    'توقيع المستخدم',
                    'User signs undertaking'
                  )}
                </b>

                <small>
                  ${t(
                    'يحفظ الإصدار والتاريخ والتوقيع',
                    'Version date and signature stored'
                  )}
                </small>
              </div>
            </div>

            <div class="flowStep">
              <span>4</span>

              <div>
                <b>
                  ${t(
                    'إشعار إدارة الجودة',
                    'Notify Quality Management'
                  )}
                </b>

                <small>
                  ${t(
                    'جاهز للمراجعة والتفعيل',
                    'Ready for review and activation'
                  )}
                </small>
              </div>
            </div>

            <div class="flowStep">
              <span>5</span>

              <div>
                <b>
                  ${t(
                    'التفعيل والتأكيد',
                    'Activation & confirmation'
                  )}
                </b>

                <small>
                  ${t(
                    'تأكيد للمستخدم ورابط آمن لتعيين كلمة المرور',
                    'User confirmation and secure password setup'
                  )}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="card"
        style="margin-top:14px"
      >
        <div class="cardHead">
          <div>
            <h3 class="cardTitle">
              ${t(
                'طلبات بانتظار إدارة الجودة',
                'Requests pending Quality Management'
              )}
            </h3>

            <p class="sub">
              ${t(
                'بعد اكتمال التعهد والتوقيع يصل إشعار لإدارة الجودة للمراجعة',
                'After undertaking and signature completion Quality Management is notified'
              )}
            </p>
          </div>
        </div>

        ${listItem(
          'signature',
          t(
            'عبدالله السبيعي',
            'Abdullah Al Subaie'
          ),
          t(
            'طلب ذاتي · تعهد v1.2 · توقيع محفوظ',
            'Self request · undertaking v1.2 · signature stored'
          ),
          B(
            t(
              'جاهز للمراجعة',
              'Ready for review'
            ),
            'warning'
          )
        )}

        ${listItem(
          'user-plus',
          t(
            'ناصر الشمري',
            'Nasser Al Shammari'
          ),
          t(
            'أنشأته الإدارة · أرسل رابط التعهد · لم يوقع بعد',
            'Admin created · undertaking link sent · not signed yet'
          ),
          B(
            t(
              'بانتظار التوقيع',
              'Awaiting signature'
            ),
            'info'
          )
        )}

        <div
          class="policyHint"
          style="margin-top:10px"
        >
          ${I('mail-check')}

          ${t(
            'بعد التفعيل يصل تأكيد للمستخدم ولا يتم إرسال كلمة المرور نفسها بالبريد',
            'After activation user receives confirmation and the password itself is never emailed'
          )}
        </div>
      </div>
    </div>
  `;
}

function users() {
  return `
    <div class="view">
      ${toolbar(
        'الحسابات والصلاحيات',
        'Accounts & Permissions',
        'قوالب أدوار جاهزة مع تحديد المشاريع ونطاق البيانات',
        'Ready role templates plus assigned projects and data scope',
        `
          <button
            class="btn primary"
            onclick="userModal()"
          >
            ${I('user-plus')}

            ${t(
              'حساب جديد',
              'New account'
            )}
          </button>
        `
      )}

      <div class="grid2">
        <div class="card">
          <div class="cardHead">
            <div>
              <h3 class="cardTitle">
                ${t(
                  'قوالب الأدوار',
                  'Role templates'
                )}
              </h3>

              <p class="sub">
                ${t(
                  'تعديل القالب يسجل في سجل العمليات',
                  'Template changes are audit logged'
                )}
              </p>
            </div>
          </div>

          ${listItem(
            'shield-check',
            t(
              'إدارة قسم الجودة',
              'Quality Management'
            ),
            t(
              'كل التشغيل بدون البلاغات الحساسة تلقائيًا',
              'All operations without automatic sensitive access'
            )
          )}

          ${listItem(
            'badge-check',
            t(
              'موظف الجودة',
              'Quality Officer'
            ),
            t(
              'مراجعة ومتابعة حسب المصفوفة',
              'Review and follow-up per matrix'
            )
          )}

          ${listItem(
            'clipboard-check',
            t(
              'مفتش الجودة',
              'Quality Inspector'
            ),
            t(
              'زياراته ونماذجه فقط بدون نتائج وتحليلات',
              'Assigned visits and forms only without results or analytics'
            )
          )}

          ${listItem(
            'briefcase-business',
            t(
              'مدير المشروع',
              'Project Manager'
            ),
            t(
              'مشاريعه فقط',
              'Assigned projects only'
            )
          )}

          ${listItem(
            'users',
            t(
              'مشرف الحراس',
              'Guard Supervisor'
            ),
            t(
              'تقييم الحراس وطلبات التدريب',
              'Guard evaluation and training requests'
            )
          )}
        </div>

        <div class="card">
          <div class="cardHead">
            <div>
              <h3 class="cardTitle">
                ${t(
                  'حالات الحسابات',
                  'Account states'
                )}
              </h3>

              <p class="sub">
                ${t(
                  'تعطيل الحساب لا يحذف السجل التاريخي',
                  'Disabling an account never deletes history'
                )}
              </p>
            </div>
          </div>

          ${listItem(
            'user-x',
            t(
              'حساب مفتش معطل',
              'Disabled inspector account'
            ),
            t(
              'لا يستطيع الدخول وكل قراراته وسجلاته محفوظة',
              'Cannot sign in and all historical records remain'
            ),
            B(
              t(
                'معطل',
                'Disabled'
              ),
              'danger'
            )
          )}

          ${listItem(
            'refresh-ccw',
            t(
              'إعادة تعيين كلمة المرور',
              'Password reset'
            ),
            t(
              'رابط مؤقت وآمن ولا ترسل كلمة المرور نفسها',
              'Secure temporary link and password itself is never emailed'
            ),
            B(
              t(
                'آمن',
                'Secure'
              ),
              'success'
            )
          )}
        </div>
      </div>

      <div
        class="card"
        style="margin-top:14px"
      >
        ${permissionMatrix()}
      </div>
    </div>
  `;
}

function permissionMatrix() {
  const rows = [
    [
      t(
        'إدارة المشاريع',
        'Manage projects'
      ),
      1,
      1,
      0,
      0,
      0,
      0
    ],

    [
      t(
        'جدولة الزيارات',
        'Schedule visits'
      ),
      0,
      1,
      0,
      0,
      0,
      0
    ],

    [
      t(
        'تعبئة التفتيش',
        'Fill inspection'
      ),
      0,
      0,
      0,
      1,
      0,
      0
    ],

    [
      t(
        'مراجعة التفتيش',
        'Review inspection'
      ),
      0,
      1,
      1,
      0,
      0,
      0
    ],

    [
      t(
        'الاعتماد',
        'Approve'
      ),
      0,
      1,
      0,
      0,
      0,
      0
    ],

    [
      t(
        'عرض التحليلات',
        'View analytics'
      ),
      1,
      1,
      0,
      0,
      1,
      0
    ],

    [
      t(
        'تقييم الحراس',
        'Evaluate guards'
      ),
      0,
      0,
      0,
      1,
      0,
      1
    ],

    [
      t(
        'طلبات التدريب',
        'Training requests'
      ),
      0,
      1,
      0,
      0,
      1,
      1
    ],

    [
      t(
        'إدارة سياسة التصعيد',
        'Manage escalation policy'
      ),
      0,
      1,
      0,
      0,
      0,
      0
    ],

    [
      t(
        'إدارة معادلة التقييم',
        'Manage scoring model'
      ),
      0,
      1,
      0,
      0,
      0,
      0
    ]
  ];

  const permission = value => {
    return `
      <span
        class="
          perm
          ${value ? 'y' : 'n'}
        "
      >
        ${I(
          value
            ? 'check'
            : 'x'
        )}
      </span>
    `;
  };

  return `
    <div class="cardHead">
      <div>
        <h3 class="cardTitle">
          ${t(
            'مصفوفة الصلاحيات المختصرة',
            'Condensed Permission Matrix'
          )}
        </h3>

        <p class="sub">
          ${t(
            'المشاهدة والإضافة والتعديل والإرسال والمراجعة والاعتماد والرفض والتنزيل والتصدير تفصل نهائيًا في الوثيقة',
            'View add edit submit review approve reject download and export are finalized separately in the permission matrix'
          )}
        </p>
      </div>
    </div>

    <div class="table">
      <table class="matrix">
        <thead>
          <tr>
            <th>
              ${t(
                'الوظيفة',
                'Function'
              )}
            </th>

            <th>
              ${t(
                'المالك',
                'Owner'
              )}
            </th>

            <th>
              ${t(
                'إدارة الجودة',
                'Quality Mgmt'
              )}
            </th>

            <th>
              ${t(
                'موظف الجودة',
                'Quality Officer'
              )}
            </th>

            <th>
              ${t(
                'المفتش',
                'Inspector'
              )}
            </th>

            <th>
              ${t(
                'مدير المشروع',
                'Project Manager'
              )}
            </th>

            <th>
              ${t(
                'مشرف الحراس',
                'Guard Supervisor'
              )}
            </th>
          </tr>
        </thead>

        <tbody>
          ${rows
            .map(row => {
              return `
                <tr>
                  <td>
                    ${row[0]}
                  </td>

                  ${row
                    .slice(1)
                    .map(value => {
                      return `
                        <td>
                          ${permission(value)}
                        </td>
                      `;
                    })
                    .join('')}
                </tr>
              `;
            })
            .join('')}
        </tbody>
      </table>
    </div>
  `;
}

function permissionTest() {
  return `
    <div class="view">
      ${toolbar(
        'اختبار الصلاحيات',
        'Permission Tests',
        'اختبار الواجهة والرابط المباشر والبحث والتنزيل والتصدير على حسابات ومشروعين',
        'Test UI direct URLs search downloads and exports across roles and two projects',
        ''
      )}

      <div class="grid2">
        <div class="card">
          <h3 class="cardTitle">
            ${t(
              'اختبار مدير المشروع',
              'Project Manager test'
            )}
          </h3>

          <p class="sub">
            ${t(
              'مدير الواحة يحاول فتح مشروع بوابة النخيل',
              'Al Waha manager tries to open Palm Gate'
            )}
          </p>

          <button
            class="btn dangerBtn"
            style="margin-top:12px"
            onclick="accessDenied()"
          >
            ${I('shield-x')}

            ${t(
              'محاولة فتح مشروع غير مصرح',
              'Try unauthorized project'
            )}
          </button>
        </div>

        <div class="card">
          <h3 class="cardTitle">
            ${t(
              'اختبار المفتش',
              'Inspector test'
            )}
          </h3>

          <p class="sub">
            ${t(
              'المفتش يحاول فتح التحليلات العامة',
              'Inspector tries to open analytics'
            )}
          </p>

          <button
            class="btn dangerBtn"
            style="margin-top:12px"
            onclick="
              toast(
                t(
                  '403 Access Denied — المفتش لا يملك صلاحية التحليلات',
                  '403 Access Denied — inspector has no analytics permission'
                )
              )
            "
          >
            ${I('shield-x')}

            ${t(
              'محاولة فتح التحليلات',
              'Try analytics'
            )}
          </button>
        </div>
      </div>

      <div
        class="card"
        style="margin-top:14px"
      >
        <div class="table">
          <table>
            <thead>
              <tr>
                <th>
                  ${t(
                    'الاختبار',
                    'Test'
                  )}
                </th>

                <th>
                  ${t(
                    'النتيجة المتوقعة',
                    'Expected result'
                  )}
                </th>

                <th>
                  ${t(
                    'الحالة',
                    'Status'
                  )}
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  ${t(
                    'تغيير رقم المشروع في الرابط',
                    'Change project ID in URL'
                  )}
                </td>

                <td>
                  403
                </td>

                <td>
                  ${B(
                    t(
                      'يمر',
                      'Pass'
                    ),
                    'success'
                  )}
                </td>
              </tr>

              <tr>
                <td>
                  ${t(
                    'بحث عن سجل خارج النطاق',
                    'Search out-of-scope record'
                  )}
                </td>

                <td>
                  ${t(
                    'لا يظهر',
                    'Hidden'
                  )}
                </td>

                <td>
                  ${B(
                    t(
                      'يمر',
                      'Pass'
                    ),
                    'success'
                  )}
                </td>
              </tr>

              <tr>
                <td>
                  ${t(
                    'تنزيل ملف من مشروع آخر',
                    'Download another project attachment'
                  )}
                </td>

                <td>
                  403
                </td>

                <td>
                  ${B(
                    t(
                      'يمر',
                      'Pass'
                    ),
                    'success'
                  )}
                </td>
              </tr>

              <tr>
                <td>
                  ${t(
                    'تصدير بيانات مشروع آخر',
                    'Export other project data'
                  )}
                </td>

                <td>
                  ${t(
                    'يمنع',
                    'Blocked'
                  )}
                </td>

                <td>
                  ${B(
                    t(
                      'يمر',
                      'Pass'
                    ),
                    'success'
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p
          class="sub"
          style="margin-top:10px"
        >
          ${t(
            'في الديمو هذه محاكاة وفي النظام النهائي يطبق المنع فعليًا في Laravel Middleware وPolicies وQueries وPrivate Storage',
            'In this demo this is simulated and production enforcement is server side through Laravel Middleware Policies Queries and Private Storage'
          )}
        </p>
      </div>
    </div>
  `;
}

function attachmentSettings() {
  return `
    <div class="view">
      ${toolbar(
        'سياسة المرفقات والفيديو',
        'Attachment & Video Policy',
        'الحدود النهائية تثبت بعد اختيار الاستضافة وحجم الاستخدام المتوقع',
        'Final limits are approved after hosting capacity and expected usage are known',
        ''
      )}

      <div class="grid2">
        <div class="card">
          <h3 class="cardTitle">
            ${t(
              'الحدود المقترحة',
              'Proposed limits'
            )}
          </h3>

          <div
            class="list"
            style="margin-top:12px"
          >
            ${listItem(
              'image',
              t(
                'الصور',
                'Images'
              ),
              t(
                'حتى 15 MB قبل المعالجة · أطول ضلع 2560px',
                'Up to 15 MB before processing · max side 2560px'
              )
            )}

            ${listItem(
              'video',
              t(
                'الفيديو',
                'Video'
              ),
              t(
                'حتى 90 ثانية و150 MB كاقتراح أولي',
                'Up to 90 seconds and 150 MB as an initial proposal'
              )
            )}

            ${listItem(
              'files',
              t(
                'عدد المرفقات',
                'Attachments per finding'
              ),
              t(
                'حتى 10 مرفقات كاقتراح قابل للتعديل',
                'Up to 10 as an adjustable proposal'
              )
            )}
          </div>
        </div>

        <div class="card">
          <h3 class="cardTitle">
            ${t(
              'الأصل أم النسخة المضغوطة',
              'Original vs compressed'
            )}
          </h3>

          <p class="sub">
            ${t(
              'القرار يؤثر على سعة التخزين والتكلفة وسرعة الرفع',
              'Choice affects storage cost and upload performance'
            )}
          </p>

          <div
            class="formGrid"
            style="margin-top:12px"
          >
            <label class="question">
              <input
                type="radio"
                name="policy"
                ${
                  S.attachmentPolicy === 'compressed'
                    ? 'checked'
                    : ''
                }
                onchange="
                  S.attachmentPolicy='compressed'
                "
              >

              ${t(
                'حفظ النسخة المضغوطة فقط',
                'Store compressed copy only'
              )}
            </label>

            <label class="question">
              <input
                type="radio"
                name="policy"
                ${
                  S.attachmentPolicy === 'original_plus_compressed'
                    ? 'checked'
                    : ''
                }
                onchange="
                  S.attachmentPolicy='original_plus_compressed'
                "
              >

              ${t(
                'حفظ الأصل + نسخة مضغوطة',
                'Store original + compressed copy'
              )}
            </label>
          </div>

          <div
            class="policyHint"
            style="margin-top:10px"
          >
            ${I('info')}

            ${t(
              'سيتم شرح أثر الخيارين على التكلفة قبل شراء أي مساحة تخزين',
              'Storage cost impact will be explained before purchasing any storage service'
            )}
          </div>
        </div>
      </div>
    </div>
  `;
}

function audit() {
  const items = [
    [
      t(
        'منح تصريح بلاغ حساس',
        'Granted sensitive-report access'
      ),
      t(
        'سلطان ا · لسارة محمد · 11:07',
        'Sultan A. · to Sarah Mohammed · 11:07'
      )
    ],

    [
      t(
        'اعتماد تقرير',
        'Approved report'
      ),
      'REP-2026-000094 · 10:46'
    ],

    [
      t(
        'إرسال تفتيش',
        'Submitted inspection'
      ),
      'VIS-2026-000123 · 10:31'
    ],

    [
      t(
        'قرار طلب تدريب',
        'Training decision'
      ),
      'TRN-2026-0015 · 09:55'
    ],

    [
      t(
        'إعادة جدولة زيارة',
        'Rescheduled visit'
      ),
      t(
        'VIS-2026-000127 · السبب والموعد القديم محفوظان',
        'VIS-2026-000127 · reason and old schedule retained'
      )
    ]
  ];

  return `
    <div class="view">
      ${toolbar(
        'سجل العمليات Audit Log',
        'Audit Log',
        'سجل إضافي غير قابل للتعديل أو الحذف يوثق من فعل ماذا ومتى',
        'Append-only history of who did what and when',
        ''
      )}

      <div class="card">
        <div class="timeline">
          ${items
            .map(item => {
              return `
                <div class="tl">
                  <b>
                    ${item[0]}
                  </b>

                  <p>
                    ${item[1]}
                    ·
                    IP
                    ${t(
                      'مسجل',
                      'stored'
                    )}
                  </p>
                </div>
              `;
            })
            .join('')}
        </div>
      </div>
    </div>
  `;
}

function backup() {
  return `
    <div class="view">
      ${toolbar(
        'النسخ الاحتياطي والاستعادة',
        'Backup & Restore',
        'نسخ قاعدة البيانات والمرفقات إلى مكان منفصل مع تجربة استعادة فعلية قبل التسليم',
        'Database and attachments are backed up separately with a real restore test before handover',
        ''
      )}

      <div class="backup">
        <div class="card orbWrap">
          <div
            style="
              text-align:center
            "
          >
            <div class="orb">
              ${I(
                'database-backup'
              )}
            </div>

            <h3>
              ${t(
                'النسخ يعمل بصورة طبيعية',
                'Backup operating normally'
              )}
            </h3>

            <p class="sub">
              ${t(
                'آخر نسخة مكتملة اليوم 04:10',
                'Last completed backup today 04:10'
              )}
            </p>

            ${B(
              t(
                'مشفر · موقع منفصل',
                'Encrypted · separate location'
              ),
              'success'
            )}
          </div>
        </div>

        <div class="card">
          <div class="cardHead">
            <div>
              <h3 class="cardTitle">
                ${t(
                  'سياسة النسخ والاستعادة',
                  'Backup & restore policy'
                )}
              </h3>

              <p class="sub">
                ${t(
                  'الاحتفاظ المقترح 30 يومية + 12 شهرية وقابل للتعديل',
                  'Proposed retention 30 daily + 12 monthly and adjustable'
                )}
              </p>
            </div>

            <button
              class="btn primary"
              onclick="restoreTest()"
            >
              ${I(
                'rotate-ccw'
              )}

              ${t(
                'تجربة استعادة',
                'Restore test'
              )}
            </button>
          </div>

          ${listItem(
            'calendar-clock',
            t(
              'نسخة يومية',
              'Daily backup'
            ),
            t(
              'قاعدة البيانات + المرفقات',
              'Database + attachments'
            ),
            B(
              t(
                'نشط',
                'Active'
              ),
              'success'
            )
          )}

          ${listItem(
            'archive',
            t(
              'نسخة شهرية',
              'Monthly backup'
            ),
            t(
              'احتفاظ طويل المدى',
              'Long-term retention'
            ),
            B(
              t(
                'نشط',
                'Active'
              ),
              'success'
            )
          )}

          ${listItem(
            'mail-check',
            t(
              'تنبيه النجاح والفشل',
              'Success/failure alert'
            ),
            t(
              'إشعار بريد لمالك النظام',
              'Email notification to owner'
            ),
            B(
              t(
                'نشط',
                'Active'
              ),
              'success'
            )
          )}

          <div id="restoreResult"></div>
        </div>
      </div>
    </div>
  `;
}

function deliveryPlan() {
  return `
    <div class="view">
      ${toolbar(
        'خطة التنفيذ والتسليم والتشغيل',
        'Delivery Support & Operations Plan',
        'ملخص المدة والمراحل والدعم والتكاليف التشغيلية والتسليم النهائي قبل الاتفاق',
        'Summary of duration phases support operating costs and final handover before agreement',
        ''
      )}

      <div class="grid2">
        <div class="card">
          <div class="cardHead">
            <div>
              <h3 class="cardTitle">
                ${t(
                  'المرحلة الأولى',
                  'Phase 1'
                )}
              </h3>

              <p class="sub">
                ${t(
                  'التأسيس والتشغيل الأساسي',
                  'Foundation & core operations'
                )}
              </p>
            </div>

            ${B(
              t(
                '25 إلى 30 يوم عمل',
                '25–30 working days'
              ),
              'info'
            )}
          </div>

          <p class="explain">
            ${t(
              'الحسابات والصلاحيات والتعهد والمشاريع وجدولة المفتشين والنماذج والإصدارات والتفتيش والمرفقات وتقييم الحراس والمراجعة والإجراءات والبحث',
              'Accounts permissions undertaking projects inspector scheduling forms versions inspection evidence guard evaluation review actions and search'
            )}
          </p>
        </div>

        <div class="card">
          <div class="cardHead">
            <div>
              <h3 class="cardTitle">
                ${t(
                  'المرحلة الثانية',
                  'Phase 2'
                )}
              </h3>

              <p class="sub">
                ${t(
                  'الوظائف المتقدمة والتقارير والتسليم',
                  'Advanced functions reporting and handover'
                )}
              </p>
            </div>

            ${B(
              t(
                '20 إلى 25 يوم عمل',
                '20–25 working days'
              ),
              'info'
            )}
          </div>

          <p class="explain">
            ${t(
              'طلبات التدريب والبلاغات الحساسة وPDF وExcel والتحليلات والتصعيد والإشعارات وسجل العمليات والنسخ والاستعادة والاختبارات والتدريب والتسليم',
              'Training requests sensitive reports PDF Excel analytics escalation notifications audit backup restore testing training and handover'
            )}
          </p>
        </div>
      </div>

      <div
        class="card"
        style="margin-top:14px"
      >
        <div class="kpis deliveryKpis">
          <div class="kpi">
            <b>
              45–55
            </b>

            <span>
              ${t(
                'يوم عمل تنفيذ',
                'working days implementation'
              )}
            </span>
          </div>

          <div class="kpi">
            <b>
              5
            </b>

            <span>
              ${t(
                'أيام مراجعة مقترحة لكل مرحلة',
                'suggested review days per phase'
              )}
            </span>
          </div>

          <div class="kpi">
            <b>
              7
            </b>

            <span>
              ${t(
                'أيام اختبار نهائي مقترحة',
                'suggested final acceptance days'
              )}
            </span>
          </div>

          <div class="kpi">
            <b>
              60
            </b>

            <span>
              ${t(
                'يوم ضمان أخطاء',
                'days defect warranty'
              )}
            </span>
          </div>
        </div>

        <p class="sub">
          ${t(
            'مدة مراجعة العميل واختباره منفصلة عن أيام التنفيذ ويثبت الجدول النهائي قبل البداية',
            'Client review time is separate from implementation working days and final schedule is fixed before start'
          )}
        </p>
      </div>

      <div
        class="grid2"
        style="margin-top:14px"
      >
        <div class="card">
          <div class="cardHead">
            <div>
              <h3 class="cardTitle">
                ${t(
                  'تكاليف التشغيل',
                  'Operating costs'
                )}
              </h3>

              <p class="sub">
                ${t(
                  'لا تفعل أي خدمة مدفوعة قبل موافقة العميل',
                  'No paid service is activated without client approval'
                )}
              </p>
            </div>
          </div>

          ${listItem(
            'server',
            t(
              'الاستضافة',
              'Hosting'
            ),
            t(
              'تحدد حسب السعة والمرفقات والأداء قبل الشراء',
              'Quoted before purchase based on capacity attachments and performance'
            ),
            B(
              t(
                'منفصلة',
                'Separate'
              ),
              'neutral'
            )
          )}

          ${listItem(
            'mail',
            t(
              'البريد SMTP',
              'SMTP email'
            ),
            t(
              'للتفعيل والتنبيهات والتصعيد مع توضيح المزود والحدود والتجديد',
              'For activation notifications and escalation with provider limits and renewal disclosed'
            ),
            B(
              t(
                'منفصلة',
                'Separate'
              ),
              'neutral'
            )
          )}

          ${listItem(
            'hard-drive',
            t(
              'التخزين والنسخ',
              'Storage & backup'
            ),
            t(
              'يتأثر بحفظ الأصل أو المضغوط والفيديو وسياسة الاحتفاظ',
              'Affected by original or compressed choice video and retention'
            ),
            B(
              t(
                'منفصلة',
                'Separate'
              ),
              'neutral'
            )
          )}

          ${listItem(
            'chart-no-axes-combined',
            t(
              'التحليلات',
              'Analytics'
            ),
            t(
              'داخل النظام بدون Power BI أو اشتراك تحليل إضافي',
              'Built in app without Power BI or extra analytics subscription'
            ),
            B(
              t(
                'بدون اشتراك BI',
                'No BI subscription'
              ),
              'success'
            )
          )}
        </div>

        <div class="card">
          <div class="cardHead">
            <div>
              <h3 class="cardTitle">
                ${t(
                  'التسليم النهائي',
                  'Final handover'
                )}
              </h3>

              <p class="sub">
                ${t(
                  'ملكية كاملة وقابلية للتطوير مستقبلًا',
                  'Full ownership and future maintainability'
                )}
              </p>
            </div>
          </div>

          ${listItem(
            'code-2',
            t(
              'الكود المصدري كاملًا',
              'Full source code'
            ),
            t(
              'المستودع تحت ملكية العميل',
              'Repository under client ownership'
            ),
            B(
              t(
                'مشمول',
                'Included'
              ),
              'success'
            )
          )}

          ${listItem(
            'database',
            t(
              'قاعدة البيانات',
              'Database'
            ),
            t(
              'المخطط والنسخة النهائية',
              'Schema and final database'
            ),
            B(
              t(
                'مشمول',
                'Included'
              ),
              'success'
            )
          )}

          ${listItem(
            'key-round',
            t(
              'حساب إدارة كامل',
              'Full admin account'
            ),
            t(
              'الخدمات والحسابات باسم العميل',
              'Services and accounts owned by client'
            ),
            B(
              t(
                'مشمول',
                'Included'
              ),
              'success'
            )
          )}

          ${listItem(
            'book-open-check',
            t(
              'تعليمات التشغيل والنسخ والاستعادة',
              'Run backup & restore instructions'
            ),
            t(
              'مع تجربة استعادة فعلية قبل الاستلام',
              'Including real restore test before final acceptance'
            ),
            B(
              t(
                'مشمول',
                'Included'
              ),
              'success'
            )
          )}
        </div>
      </div>

      <div
        class="sensitive"
        style="margin-top:14px"
      >
        ${I('badge-check')}

        <div>
          <b>
            ${t(
              'شرط الإغلاق النهائي',
              'Final completion rule'
            )}
          </b>

          <p>
            ${t(
              'لا يعتبر المشروع مكتملًا أو مغلقًا إلا بعد تنفيذ النطاق المتفق عليه ومعالجة الملاحظات المتعلقة به وإعادة اختبارها واعتماد العميل النهائي كتابة',
              'Project is not complete or closed until agreed scope is implemented in scope issues are fixed and retested and final written acceptance is received'
            )}
          </p>
        </div>
      </div>
    </div>
  `;
}

function demoGuide() {
  const coverage = [
    t(
      'جدولة من إدارة الجودة مع توافر المفتشين ومنع التعارض',
      'Quality-only scheduling with inspector availability and conflict prevention'
    ),

    t(
      'تصنيف الملاحظات فوري ومحدد المدة وطويل المدى',
      'Immediate time-bound and long-term finding classes'
    ),

    t(
      'تصعيد 3 و6 و9 أيام ثم الإدارة العليا مع البريد',
      '3 6 9 day escalation then Senior Management with email'
    ),

    t(
      'تقييم المشروع من 100 بالخصومات مع مقارنة معادلة المطابقة',
      '100-point project score with deduction model comparison'
    ),

    t(
      'تحليلات الملاحظات للموظفين ومدة الإغلاق والشكاوى والعقود',
      'Analytics for findings per employee closure time complaints and contracts'
    ),

    t(
      'المفتش بلا نتائج أو تحليلات ومدير المشروع داخل مشروعه فقط',
      'Inspector without results or analytics and Project Manager scoped to own project'
    ),

    t(
      'PDF ببيانات القرار وتنزيل المعتمد حسب الصلاحية',
      'PDF with decision data and permission based approved download'
    ),

    t(
      'التعهد إلزامي حتى للحسابات التي تنشئها الإدارة',
      'Mandatory undertaking for admin-created accounts'
    ),

    t(
      'البلاغات الحساسة بصلاحية مستقلة يمنحها المالك فقط',
      'Sensitive access independently granted by owner only'
    ),

    t(
      'خطة تنفيذ ودعم وتشغيل وتسليم كاملة',
      'Complete implementation support operations and handover plan'
    )
  ];

  return `
    <div class="view">
      ${toolbar(
        'دليل الديمو ونطاق العرض',
        'Demo Guide & Presentation Scope',
        'النسخة الحالية ببيانات وهمية وتوضح التدفقات بينما الوظائف الخلفية الحقيقية تنفذ في Laravel وMySQL',
        'Current build uses mock data to demonstrate workflows while production backend functions are implemented in Laravel and MySQL',
        ''
      )}

      <div class="grid2">
        <div class="card">
          <div class="cardHead">
            <div>
              <h3 class="cardTitle">
                ${t(
                  'سيناريو العرض المقترح',
                  'Recommended walkthrough'
                )}
              </h3>

              <p class="sub">
                ${t(
                  'يمر على آخر نقاط العميل بالترتيب',
                  'Covers the client latest requirements in sequence'
                )}
              </p>
            </div>
          </div>

          <div class="timeline">
            <div class="tl">
              <b>
                1 ·
                ${t(
                  'إدارة الجودة وجدولة المفتشين',
                  'Quality Management & inspector scheduling'
                )}
              </b>

              <p>
                ${t(
                  'اختر 8 أكتوبر الساعة 10 وشاهد المتاح والمشغول',
                  'Choose 8 Oct at 10:00 and review available and busy inspectors'
                )}
              </p>
            </div>

            <div class="tl">
              <b>
                2 ·
                ${t(
                  'المفتش والتفتيش',
                  'Inspector & inspection'
                )}
              </b>

              <p>
                ${t(
                  'لاحظ إخفاء النتائج والتحليلات مع السماح بالمسودة والأدلة والاستكمال',
                  'Verify results and analytics are hidden while drafts evidence and returned work are allowed'
                )}
              </p>
            </div>

            <div class="tl">
              <b>
                3 ·
                ${t(
                  'الملاحظات والتصعيد',
                  'Findings & escalation'
                )}
              </b>

              <p>
                ${t(
                  'صنف الملاحظة وشاهد الأصفر والبرتقالي والأحمر والإدارة العليا',
                  'Classify a finding and review yellow orange red and senior escalation'
                )}
              </p>
            </div>

            <div class="tl">
              <b>
                4 ·
                ${t(
                  'معادلة التقييم',
                  'Scoring model'
                )}
              </b>

              <p>
                ${t(
                  'قارن نسبة المطابقة مع نموذج الخصم من 100',
                  'Compare visit compliance with the 100 point deduction model'
                )}
              </p>
            </div>

            <div class="tl">
              <b>
                5 ·
                ${t(
                  'التحليلات والتقارير',
                  'Analytics & reports'
                )}
              </b>

              <p>
                ${t(
                  'راجع النسب ومدة الإغلاق والشكاوى والعقود ثم افتح PDF',
                  'Review ratios closure time complaints contracts then open PDF'
                )}
              </p>
            </div>

            <div class="tl">
              <b>
                6 ·
                ${t(
                  'التعهد والبلاغات والتسليم',
                  'Undertaking sensitive reports & handover'
                )}
              </b>

              <p>
                ${t(
                  'اختبر الحساب المنشأ إداريًا ثم صلاحية البلاغات وخطة التسليم',
                  'Test admin-created account undertaking sensitive access and delivery plan'
                )}
              </p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="cardHead">
            <div>
              <h3 class="cardTitle">
                ${t(
                  'حقيقة الديمو',
                  'Demo truthfulness'
                )}
              </h3>

              <p class="sub">
                ${t(
                  'ما هو محاكاة وما هو إنتاج فعلي لاحقًا',
                  'What is simulated versus production implementation'
                )}
              </p>
            </div>
          </div>

          <div class="sensitive">
            ${I('flask-conical')}

            <div>
              <b>
                ${t(
                  'واجهة تفاعلية ببيانات وهمية',
                  'Interactive mock data interface'
                )}
              </b>

              <p>
                ${t(
                  'البريد الحقيقي ومنع الروابط المباشرة والتشفير والتخزين الخاص والنسخ والاستعادة وPDF الحقيقي كلها تحتاج Backend وخدمات فعلية',
                  'Real email direct-link enforcement encryption private storage backup restore and server PDF require backend and production services'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        class="card"
        style="margin-top:14px"
      >
        <div class="cardHead">
          <div>
            <h3 class="cardTitle">
              ${t(
                'تغطية آخر المتطلبات',
                'Latest requirements coverage'
              )}
            </h3>

            <p class="sub">
              ${t(
                'كل نقطة لها شاشة أو تدفق واضح داخل الديمو',
                'Every point has a visible screen or workflow'
              )}
            </p>
          </div>
        </div>

        <div class="grid2">
          ${coverage
            .map(
              (
                item,
                index
              ) => {
                return `
                  <div class="version">
                    <div class="vno">
                      ${String(
                        index + 1
                      ).padStart(
                        2,
                        '0'
                      )}
                    </div>

                    <div class="vmain">
                      <b>
                        ${item}
                      </b>

                      <span>
                        ${t(
                          'ممثل في الديمو',
                          'Represented in demo'
                        )}
                      </span>
                    </div>

                    ${B(
                      t(
                        'مغطى',
                        'Covered'
                      ),
                      'success'
                    )}
                  </div>
                `;
              }
            )
            .join('')}
        </div>
      </div>
    </div>
  `;
}

function render() {
  const views = {
    dashboard,
    projects: projectView,
    schedule,
    inspection,
    review,
    forms,
    guards,
    actions,
    training,
    confidential,
    reports,
    analytics,
    score_model: scoreModel,
    registration,
    users,
    permission_test: permissionTest,
    attachment_settings: attachmentSettings,
    audit,
    backup,
    delivery_plan: deliveryPlan,
    demo_guide: demoGuide
  };

  if (!views[S.view]) {
    S.view = 'dashboard';
  }

  const content =
    document.querySelector(
      '#content'
    );

  if (content) {
    content.innerHTML =
      views[S.view]();
  }

  const title =
    document.querySelector(
      '#title'
    );

  if (title) {
    title.textContent =
      currentTitle();
  }

  setupNav();
  updateStatic();
  icons();

  if (
    S.view === 'registration'
  ) {
    initSignature();
  }
}

function modal(html) {
  const body =
    document.querySelector(
      '#modalBody'
    );

  const overlay =
    document.querySelector(
      '#modal'
    );

  if (!body || !overlay) {
    return;
  }

  body.innerHTML = html;

  overlay.classList.remove(
    'hidden'
  );

  icons();
}

function closeModal() {
  const overlay =
    document.querySelector(
      '#modal'
    );

  if (overlay) {
    overlay.classList.add(
      'hidden'
    );
  }
}

function projectModal() {
  modal(`
    <h2>
      ${t(
        'إضافة مشروع',
        'Add Project'
      )}
    </h2>

    <div
      class="formGrid"
      style="margin-top:14px"
    >
      <div class="field">
        <label>
          ${t(
            'الاسم بالعربية',
            'Arabic name'
          )}
        </label>

        <input class="input">
      </div>

      <div class="field">
        <label>
          ${t(
            'الاسم بالإنجليزية',
            'English name'
          )}
        </label>

        <input class="input">
      </div>

      <div class="field">
        <label>
          ${t(
            'الرمز',
            'Code'
          )}
        </label>

        <input
          class="input"
          placeholder="PR-001"
        >
      </div>

      <div class="field">
        <label>
          ${t(
            'المنطقة',
            'Region'
          )}
        </label>

        <input class="input">
      </div>

      <div class="field">
        <label>
          ${t(
            'عدد الموظفين',
            'Employee count'
          )}
        </label>

        <input
          class="input"
          type="number"
        >
      </div>

      <div class="field">
        <label>
          ${t(
            'تاريخ انتهاء العقد',
            'Contract expiry'
          )}
        </label>

        <input
          class="input"
          type="date"
        >
      </div>
    </div>

    <button
      class="btn primary"
      style="margin-top:12px"
      onclick="
        toast(
          t(
            'تمت إضافة مشروع تجريبي',
            'Demo project added'
          )
        );
        closeModal()
      "
    >
      ${t(
        'حفظ',
        'Save'
      )}
    </button>
  `);
}

function openProject(id) {
  const project =
    projects.find(
      item =>
        item.id === id
    );

  if (!project) {
    return;
  }

  if (
    S.role ===
      'project_manager' &&
    id !== 'P-001'
  ) {
    accessDenied();

    return;
  }

  modal(`
    <h2>
      ${
        S.lang === 'ar'
          ? project.ar
          : project.en
      }
    </h2>

    <p class="sub">
      ${project.code}
      ·
      ${
        S.lang === 'ar'
          ? project.regionAr
          : project.regionEn
      }
    </p>

    <div
      class="kpis"
      style="
        grid-template-columns:
          repeat(4,1fr);
        margin-top:14px
      "
    >
      <div class="kpi">
        <b>
          ${project.score}%
        </b>

        <span>
          ${t(
            'التقييم',
            'Score'
          )}
        </span>
      </div>

      <div class="kpi">
        <b>
          ${project.visits}
        </b>

        <span>
          ${t(
            'الزيارات',
            'Visits'
          )}
        </span>
      </div>

      <div class="kpi">
        <b>
          ${project.findings}
        </b>

        <span>
          ${t(
            'الملاحظات',
            'Findings'
          )}
        </span>
      </div>

      <div class="kpi">
        <b>
          ${project.open}
        </b>

        <span>
          ${t(
            'إجراءات مفتوحة',
            'Open actions'
          )}
        </span>
      </div>
    </div>

    <button
      class="btn secondary"
      onclick="
        closeModal();
        go('analytics')
      "
    >
      ${I('chart-column')}

      ${t(
        'فتح التحليل',
        'Open analytics'
      )}
    </button>
  `);
}

function visitModal() {
  if (
    S.role !== 'quality_admin'
  ) {
    toast(
      t(
        'جدولة الزيارات متاحة لإدارة الجودة فقط',
        'Only Quality Management can schedule visits'
      )
    );

    return;
  }

  S.selectedInspector = '';

  modal(`
    <h2>
      ${t(
        'جدولة زيارة جديدة',
        'Schedule New Visit'
      )}
    </h2>

    <p class="sub">
      ${t(
        'اختيار التاريخ والوقت يعرض كل المفتشين وحالتهم قبل الإسناد',
        'Date and time selection shows all inspectors and availability before assignment'
      )}
    </p>

    <div
      class="formGrid"
      style="margin-top:14px"
    >
      <div class="field">
        <label>
          ${t(
            'المشروع',
            'Project'
          )}
        </label>

        <select class="select">
          <option>
            ${projectName(
              'P-001'
            )}
          </option>

          <option>
            ${projectName(
              'P-002'
            )}
          </option>
        </select>
      </div>

      <div class="field">
        <label>
          ${t(
            'الموقع',
            'Site'
          )}
        </label>

        <select class="select">
          <option>
            ${t(
              'البوابة الرئيسية',
              'Main Gate'
            )}
          </option>

          <option>
            ${t(
              'المبنى الإداري',
              'Admin Building'
            )}
          </option>
        </select>
      </div>

      <div class="field">
        <label>
          ${t(
            'التاريخ',
            'Date'
          )}
        </label>

        <input
          id="visitDate"
          class="input"
          type="date"
          value="2026-10-08"
          onchange="updateAvailability()"
        >
      </div>

      <div class="field">
        <label>
          ${t(
            'الوقت',
            'Time'
          )}
        </label>

        <input
          id="visitTime"
          class="input"
          type="time"
          value="10:00"
          onchange="updateAvailability()"
        >
      </div>

      <div class="field">
        <label>
          ${t(
            'نوع التفتيش',
            'Inspection type'
          )}
        </label>

        <select class="select">
          <option>
            ${t(
              'دوري',
              'Routine'
            )}
          </option>

          <option>
            ${t(
              'مفاجئ',
              'Surprise'
            )}
          </option>

          <option>
            ${t(
              'متابعة',
              'Follow-up'
            )}
          </option>
        </select>
      </div>

      <div class="field">
        <label>
          ${t(
            'الوردية',
            'Shift'
          )}
        </label>

        <select class="select">
          <option>
            ${t(
              'صباحية',
              'Morning'
            )}
          </option>

          <option>
            ${t(
              'مسائية',
              'Evening'
            )}
          </option>
        </select>
      </div>
    </div>

    <div style="margin-top:15px">
      <div class="cardHead">
        <div>
          <h3 class="cardTitle">
            ${t(
              'مفتشو الجودة',
              'Quality Inspectors'
            )}
          </h3>

          <p class="sub">
            ${t(
              'المفتش المشغول لا يمكن اختياره لنفس التوقيت',
              'Busy inspector cannot be selected for the same time'
            )}
          </p>
        </div>
      </div>

      <div
        id="inspectorAvailability"
        class="availabilityGrid"
      >
        ${availabilityCards()}
      </div>
    </div>

    <div class="modalFooter">
      <div class="policyHint">
        ${I('shield-check')}

        ${t(
          'الإسناد يسجل اسم من قام به ويرسل إشعارًا للمفتش',
          'Assignment logs the assigner and notifies the inspector'
        )}
      </div>

      <button
        class="btn primary"
        onclick="saveScheduledVisit()"
      >
        ${t(
          'حفظ وإسناد',
          'Save & assign'
        )}
      </button>
    </div>
  `);
}

function saveScheduledVisit() {
  if (!S.selectedInspector) {
    toast(
      t(
        'اختاري مفتشًا متاحًا أولًا',
        'Choose an available inspector first'
      )
    );

    return;
  }

  const date =
    document.querySelector(
      '#visitDate'
    )?.value || '';

  const time =
    document.querySelector(
      '#visitTime'
    )?.value || '';

  const inspector =
    inspectors.find(
      item =>
        item.id ===
        S.selectedInspector
    );

  if (
    inspectorStatus(
      inspector,
      date,
      time
    ).busy
  ) {
    toast(
      t(
        'يوجد تعارض في هذا الموعد',
        'Scheduling conflict detected'
      )
    );

    return;
  }

  toast(
    t(
      'تمت الجدولة من إدارة الجودة وإشعار المفتش',
      'Visit scheduled by Quality Management and inspector notified'
    )
  );

  closeModal();
}

function rescheduleModal() {
  if (
    S.role !== 'quality_admin'
  ) {
    toast(
      t(
        'إعادة الجدولة والإلغاء من إدارة الجودة فقط',
        'Only Quality Management can reschedule or cancel'
      )
    );

    return;
  }

  modal(`
    <h2>
      ${t(
        'إعادة جدولة أو إلغاء زيارة',
        'Reschedule or Cancel Visit'
      )}
    </h2>

    <div class="field">
      <label>
        ${t(
          'الإجراء',
          'Action'
        )}
      </label>

      <select class="select">
        <option>
          ${t(
            'إعادة جدولة',
            'Reschedule'
          )}
        </option>

        <option>
          ${t(
            'إلغاء',
            'Cancel'
          )}
        </option>
      </select>
    </div>

    <div
      class="field"
      style="margin-top:10px"
    >
      <label>
        ${t(
          'السبب إلزامي',
          'Reason is mandatory'
        )}
      </label>

      <textarea
        class="textarea"
        placeholder="${t(
          'اكتب سبب التغيير',
          'Enter reason'
        )}"
      ></textarea>
    </div>

    <div
      class="field"
      style="margin-top:10px"
    >
      <label>
        ${t(
          'الموعد الجديد عند إعادة الجدولة',
          'New date and time if rescheduled'
        )}
      </label>

      <input
        class="input"
        type="datetime-local"
      >
    </div>

    <div
      class="sensitive"
      style="margin-top:10px"
    >
      ${I('history')}

      <div>
        <b>
          ${t(
            'حفظ تاريخي كامل',
            'Full history'
          )}
        </b>

        <p>
          ${t(
            'يحفظ الموعد القديم والجديد والسبب واسم من قام بالتغيير',
            'Old and new schedule reason and actor are retained'
          )}
        </p>
      </div>
    </div>

    <button
      class="btn primary"
      style="margin-top:12px"
      onclick="
        toast(
          t(
            'تم تسجيل التغيير وإشعار المفتش',
            'Change logged and inspector notified'
          )
        );
        closeModal()
      "
    >
      ${t(
        'تأكيد',
        'Confirm'
      )}
    </button>
  `);
}

function answer(
  id,
  value
) {
  S.answers[id] =
    value;

  render();
}

function saveDraft() {
  S.status = 'draft';

  toast(
    t(
      'تم حفظ المسودة',
      'Draft saved'
    )
  );
}

function submitInspection() {
  S.status = 'submitted';
  S.reviewState = 'pending';

  toast(
    t(
      'تم إرسال التفتيش للمراجعة وتثبيت الإصدار والنتيجة داخليًا',
      'Inspection submitted for review and version plus calculated result frozen internally'
    )
  );

  render();
}

function fileDemo(input) {
  const box =
    document.querySelector(
      '#fileList'
    );

  if (!box) {
    return;
  }

  box.innerHTML =
    [...input.files]
      .map(file => {
        let icon = 'file';

        if (
          file.type.startsWith(
            'video'
          )
        ) {
          icon = 'video';
        }

        if (
          file.type.startsWith(
            'image'
          )
        ) {
          icon = 'image';
        }

        return listItem(
          icon,
          file.name,
          `${(
            file.size /
            1024 /
            1024
          ).toFixed(2)} MB · ${t(
            'رفع الآن',
            'uploaded now'
          )}`,
          B(
            t(
              'تجريبي',
              'Demo'
            ),
            'info'
          )
        );
      })
      .join('');

  icons();
}

function guardEval() {
  modal(`
    <h2>
      ${t(
        'تقييم الحارس',
        'Guard Evaluation'
      )}
    </h2>

    <p class="sub">
      ${t(
        'محمد العتيبي · EMP-1042 · مرتبط بالزيارة VIS-2026-000123',
        'Mohammed Al Otaibi · EMP-1042 · linked to VIS-2026-000123'
      )}
    </p>

    <div
      class="formGrid"
      style="margin-top:14px"
    >
      <div class="field">
        <label>
          ${t(
            'الانضباط',
            'Discipline'
          )}
        </label>

        <input
          type="range"
          min="0"
          max="100"
          value="95"
        >
      </div>

      <div class="field">
        <label>
          ${t(
            'الالتزام بالإجراءات',
            'Procedure compliance'
          )}
        </label>

        <input
          type="range"
          min="0"
          max="100"
          value="90"
        >
      </div>

      <div class="field span2">
        <label>
          ${t(
            'ملاحظات مستقلة',
            'Independent notes'
          )}
        </label>

        <textarea class="textarea">${t(
          'التزام جيد مع ملاحظة بسيطة في تسليم الوردية',
          'Good compliance with a minor shift-handover note'
        )}</textarea>
      </div>
    </div>

    <button
      class="btn primary"
      onclick="
        toast(
          t(
            'تم حفظ تقييم الحارس وربطه بسجله',
            'Guard evaluation saved and linked to record'
          )
        );
        closeModal()
      "
    >
      ${t(
        'حفظ التقييم',
        'Save evaluation'
      )}
    </button>
  `);
}

function decision(type) {
  if (
    type === 'approve'
  ) {
    S.reviewState =
      'approved';

    toast(
      t(
        'تم اعتماد التقرير وتثبيت بيانات المعتمد تاريخيًا',
        'Report approved and decision-maker snapshot frozen'
      )
    );

    render();

    return;
  }

  modal(`
    <h2>
      ${
        type === 'return'
          ? t(
              'إعادة التقرير للاستكمال',
              'Return for Completion'
            )
          : t(
              'رفض التقرير',
              'Reject Report'
            )
      }
    </h2>

    <div class="field">
      <label>
        ${t(
          'السبب إلزامي',
          'Reason is mandatory'
        )}
      </label>

      <textarea
        id="decisionReason"
        class="textarea"
      ></textarea>
    </div>

    <button
      class="
        btn
        ${
          type === 'return'
            ? 'secondary'
            : 'dangerBtn'
        }
      "
      style="margin-top:10px"
      onclick="confirmDecision('${type}')"
    >
      ${t(
        'تأكيد القرار',
        'Confirm decision'
      )}
    </button>
  `);
}

function confirmDecision(type) {
  const reason =
    document.querySelector(
      '#decisionReason'
    )?.value.trim();

  if (!reason) {
    toast(
      t(
        'اكتب سبب القرار أولًا',
        'Enter a reason first'
      )
    );

    return;
  }

  S.reviewState =
    type === 'return'
      ? 'returned'
      : 'rejected';

  toast(
    type === 'return'
      ? t(
          'تمت الإعادة للمفتش مع السبب',
          'Returned to inspector with reason'
        )
      : t(
          'تم رفض التقرير مع السبب',
          'Report rejected with reason'
        )
  );

  closeModal();
  render();
}

function formBuilder() {
  modal(`
    <h2>
      ${t(
        'منشئ النماذج',
        'Form Builder'
      )}
    </h2>

    <p class="sub">
      ${t(
        'إضافة نماذج مستقبلًا من داخل النظام بدون تعديل الكود',
        'Future forms can be created from the system without code changes'
      )}
    </p>

    <div
      class="formGrid"
      style="margin-top:14px"
    >
      <div class="field">
        <label>
          ${t(
            'اسم عربي',
            'Arabic name'
          )}
        </label>

        <input
          class="input"
          value="تفتيش أمني شامل"
        >
      </div>

      <div class="field">
        <label>
          English name
        </label>

        <input
          class="input"
          value="Comprehensive Security Inspection"
        >
      </div>

      <div class="field">
        <label>
          ${t(
            'نوع التفتيش',
            'Inspection type'
          )}
        </label>

        <select class="select">
          <option>
            ${t(
              'دوري',
              'Routine'
            )}
          </option>

          <option>
            ${t(
              'مفاجئ',
              'Surprise'
            )}
          </option>
        </select>
      </div>

      <div class="field">
        <label>
          ${t(
            'المشروع',
            'Project'
          )}
        </label>

        <select class="select">
          <option>
            ${t(
              'كل المشاريع',
              'All projects'
            )}
          </option>
        </select>
      </div>
    </div>

    <div
      class="question"
      style="margin-top:12px"
    >
      <div class="qHead">
        <div>
          <h4>
            ${t(
              'بند جديد',
              'New item'
            )}
          </h4>

          <p>
            ${t(
              'نص البند بالعربية والإنجليزية والوزن والحقول الإلزامية',
              'Arabic and English text weight and required fields'
            )}
          </p>
        </div>

        <span class="weight">
          10
        </span>
      </div>
    </div>

    <button
      class="btn primary"
      onclick="
        toast(
          t(
            'تم حفظ النموذج كمسودة v1.0',
            'Form saved as draft v1.0'
          )
        );
        closeModal()
      "
    >
      ${t(
        'حفظ كمسودة',
        'Save draft'
      )}
    </button>
  `);
}

function guardProfile(name) {
  modal(`
    <h2>
      ${name}
    </h2>

    <p class="sub">
      EMP-1042
      ·
      ***6789
      ·
      ${projectName('P-001')}
    </p>

    <div
      class="kpis"
      style="
        grid-template-columns:
          repeat(3,1fr);
        margin-top:14px
      "
    >
      <div class="kpi">
        <b>92%</b>

        <span>
          ${t(
            'آخر تقييم',
            'Last score'
          )}
        </span>
      </div>

      <div class="kpi">
        <b>14</b>

        <span>
          ${t(
            'تقييم',
            'Evaluations'
          )}
        </span>
      </div>

      <div class="kpi">
        <b>1</b>

        <span>
          ${t(
            'ملاحظة متكررة',
            'Repeated finding'
          )}
        </span>
      </div>
    </div>

    <div class="timeline">
      <div class="tl">
        <b>
          ${t(
            'تقييم زيارة VIS-000123',
            'VIS-000123 evaluation'
          )}
        </b>

        <p>
          92%
          ·
          ${t(
            'ملاحظة تسليم وردية',
            'Shift handover note'
          )}
        </p>
      </div>

      <div class="tl">
        <b>
          ${t(
            'دورة التعامل مع الزوار',
            'Visitor Handling training'
          )}
        </b>

        <p>
          ${t(
            'مكتملة · شهادة مرفقة',
            'Completed · certificate attached'
          )}
        </p>
      </div>
    </div>
  `);
}

function escalationSettings() {
  modal(`
    <h2>
      ${t(
        'سياسة التصعيد',
        'Escalation Policy'
      )}
    </h2>

    <p class="sub">
      ${t(
        'القرار النهائي للأيام وبداية العد يتم تثبيته قبل التنفيذ',
        'Final day basis and start point are approved before implementation'
      )}
    </p>

    <div
      class="formGrid"
      style="margin-top:14px"
    >
      <div class="field">
        <label>
          ${t(
            'بداية العد',
            'Timer starts from'
          )}
        </label>

        <select
          id="esStart"
          class="select"
        >
          <option
            value="finding_created"
            ${
              S.escalationStart ===
              'finding_created'
                ? 'selected'
                : ''
            }
          >
            ${t(
              'لحظة تسجيل الملاحظة',
              'Finding creation'
            )}
          </option>

          <option
            value="due_date"
            ${
              S.escalationStart ===
              'due_date'
                ? 'selected'
                : ''
            }
          >
            ${t(
              'تاريخ الاستحقاق',
              'Due date'
            )}
          </option>
        </select>
      </div>

      <div class="field">
        <label>
          ${t(
            'نوع الأيام',
            'Day type'
          )}
        </label>

        <select
          id="esBasis"
          class="select"
        >
          <option
            value="calendar"
            ${
              S.escalationBasis ===
              'calendar'
                ? 'selected'
                : ''
            }
          >
            ${t(
              'أيام تقويمية',
              'Calendar days'
            )}
          </option>

          <option
            value="business"
            ${
              S.escalationBasis ===
              'business'
                ? 'selected'
                : ''
            }
          >
            ${t(
              'أيام عمل',
              'Business days'
            )}
          </option>
        </select>
      </div>
    </div>

    <div
      class="escalationFlow"
      style="margin-top:14px"
    >
      <div class="flowNode yellow">
        <b>3</b>

        <span>
          ${t(
            'أصفر + بريد',
            'Yellow + email'
          )}
        </span>
      </div>

      <div class="flowLine"></div>

      <div class="flowNode orange">
        <b>6</b>

        <span>
          ${t(
            'برتقالي + بريد',
            'Orange + email'
          )}
        </span>
      </div>

      <div class="flowLine"></div>

      <div class="flowNode red">
        <b>9</b>

        <span>
          ${t(
            'أحمر + بريد',
            'Red + email'
          )}
        </span>
      </div>

      <div class="flowLine"></div>

      <div class="flowNode senior">
        <b>
          ${I('building-2')}
        </b>

        <span>
          ${t(
            'الإدارة العليا',
            'Senior Management'
          )}
        </span>
      </div>
    </div>

    <button
      class="btn primary"
      style="margin-top:14px"
      onclick="saveEscalationSettings()"
    >
      ${t(
        'حفظ الإعداد التجريبي',
        'Save demo policy'
      )}
    </button>
  `);
}

function saveEscalationSettings() {
  S.escalationStart =
    document.querySelector(
      '#esStart'
    )?.value ||
    'finding_created';

  S.escalationBasis =
    document.querySelector(
      '#esBasis'
    )?.value ||
    'calendar';

  toast(
    t(
      'تم حفظ سياسة التصعيد في الديمو',
      'Demo escalation policy saved'
    )
  );

  closeModal();
  render();
}

function actionModal(id) {
  modal(`
    <h2>
      ${id}
    </h2>

    <p class="sub">
      ${t(
        'مخالفة مرتبطة بزيارة وبند ومشروع ومسؤول وموعد مستهدف',
        'Finding linked to visit item project owner and due date'
      )}
    </p>

    <div
      class="timeline"
      style="margin-top:14px"
    >
      <div class="tl">
        <b>
          ${t(
            'إنشاء المخالفة',
            'Finding created'
          )}
        </b>

        <p>
          ${t(
            'من بند غير مطابق مع صورة',
            'From non compliant item with evidence'
          )}
        </p>
      </div>

      <div class="tl">
        <b>
          ${t(
            'إسناد الإجراء',
            'Action assigned'
          )}
        </b>

        <p>
          ${t(
            'المسؤول والموعد والخطورة محفوظة',
            'Owner due date and severity stored'
          )}
        </p>
      </div>

      <div class="tl">
        <b>
          ${t(
            'التصعيد',
            'Escalation'
          )}
        </b>

        <p>
          ${t(
            'تم إرسال بريد حسب المرحلة الحالية',
            'Email simulated for current escalation stage'
          )}
        </p>
      </div>

      <div class="tl">
        <b>
          ${t(
            'دليل المعالجة',
            'Treatment evidence'
          )}
        </b>

        <p>
          ${t(
            'بانتظار مراجعة الجودة',
            'Pending Quality review'
          )}
        </p>
      </div>
    </div>

    <button
      class="btn primary"
      onclick="
        toast(
          t(
            'تم اعتماد الإغلاق',
            'Closure approved'
          )
        );
        closeModal()
      "
    >
      ${I(
        'circle-check-big'
      )}

      ${t(
        'اعتماد الإغلاق',
        'Approve closure'
      )}
    </button>
  `);
}

function trainingModal() {
  modal(`
    <h2>
      ${t(
        'طلب دورة تدريبية',
        'Training Request'
      )}
    </h2>

    <div class="formGrid">
      <div class="field">
        <label>
          ${t(
            'الموظف',
            'Employee'
          )}
        </label>

        <select class="select">
          <option>
            ${t(
              'محمد العتيبي',
              'Mohammed Al Otaibi'
            )}
            ·
            EMP-1042
          </option>
        </select>
      </div>

      <div class="field">
        <label>
          ${t(
            'الدورة',
            'Course'
          )}
        </label>

        <select class="select">
          <option>
            ${t(
              'إدارة الحشود',
              'Crowd Management'
            )}
          </option>

          <option>
            ${t(
              'الاستجابة للطوارئ',
              'Emergency Response'
            )}
          </option>
        </select>
      </div>

      <div class="field span2">
        <label>
          ${t(
            'السبب',
            'Reason'
          )}
        </label>

        <textarea class="textarea">${t(
          'ملاحظة متكررة مرتبطة بالتقييم',
          'Repeated finding linked to evaluation'
        )}</textarea>
      </div>
    </div>

    <div
      class="policyHint"
      style="margin-top:10px"
    >
      ${I('route')}

      ${t(
        'المسار مشرف الحراس ثم مدير المشروع ثم إدارة الجودة',
        'Flow Guard Supervisor then Project Manager then Quality Management'
      )}
    </div>

    <button
      class="btn primary"
      style="margin-top:10px"
      onclick="
        toast(
          t(
            'تم رفع الطلب لمدير المشروع',
            'Request sent to Project Manager'
          )
        );
        closeModal()
      "
    >
      ${t(
        'إرسال الطلب',
        'Submit request'
      )}
    </button>
  `);
}

function grantSensitive() {
  if (S.role !== 'owner') {
    toast(
      t(
        'مالك النظام فقط يستطيع منح هذه الصلاحية',
        'Only System Owner can grant this permission'
      )
    );

    return;
  }

  const role =
    document.querySelector(
      '#grantRole'
    )?.value;

  if (
    role &&
    !S.sensitiveGranted.includes(
      role
    )
  ) {
    S.sensitiveGranted.push(
      role
    );
  }

  toast(
    t(
      'تم منح التصريح المستقل وتسجيل العملية',
      'Independent access granted and action logged'
    )
  );

  setupNav();
  render();
}

function revokeSensitive() {
  if (S.role !== 'owner') {
    toast(
      t(
        'مالك النظام فقط يستطيع سحب هذه الصلاحية',
        'Only System Owner can revoke this permission'
      )
    );

    return;
  }

  const role =
    document.querySelector(
      '#grantRole'
    )?.value;

  S.sensitiveGranted =
    S.sensitiveGranted.filter(
      item => item !== role
    );

  toast(
    t(
      'تم سحب التصريح وتسجيل العملية',
      'Access revoked and action logged'
    )
  );

  setupNav();
  render();
}

function reportModal(
  id = 'REP-2026-000094',
  status = 'approved'
) {
  const approved =
    status === 'approved';

  const decision =
    approved
      ? {
          name: t(
            'نورة العتيبي',
            'Noura Al Otaibi'
          ),
          title: t(
            'مديرة قسم الجودة',
            'Quality Department Manager'
          ),
          time:
            '04 Oct 2026 · 10:46',
          reason: '—'
        }
      : {
          name: t(
            'سارة محمد',
            'Sarah Mohammed'
          ),
          title: t(
            'موظف جودة',
            'Quality Officer'
          ),
          time:
            '30 Sep 2026 · 13:15',
          reason: t(
            'استكمال صورة بوابة الطوارئ',
            'Complete emergency gate evidence photo'
          )
        };

  modal(`
    <div
      class="hero"
      style="padding:18px"
    >
      <div class="kicker">
        ${I('file-check-2')}

        ${t(
          'تقرير تفتيش',
          'Inspection Report'
        )}
      </div>

      <h2>
        ${id}
      </h2>

      <p>
        ${projectName('P-001')}
        ·
        VIS-2026-000123
        ·
        v2.4
      </p>
    </div>

    <div
      class="kpis"
      style="
        grid-template-columns:
          repeat(4,1fr);
        margin-top:12px
      "
    >
      <div class="kpi">
        <b>
          ${
            approved
              ? '92%'
              : '—'
          }
        </b>

        <span>
          ${t(
            'النتيجة',
            'Score'
          )}
        </span>
      </div>

      <div class="kpi">
        <b>
          ${
            approved
              ? t(
                  'معتمد',
                  'Approved'
                )
              : t(
                  'معاد',
                  'Returned'
                )
          }
        </b>

        <span>
          ${t(
            'الحالة',
            'Status'
          )}
        </span>
      </div>

      <div class="kpi">
        <b>
          ${decision.time
            .split('·')
            .pop()
            .trim()}
        </b>

        <span>
          ${t(
            'وقت القرار',
            'Decision time'
          )}
        </span>
      </div>

      <div class="kpi">
        <b>
          v2
        </b>

        <span>
          ${t(
            'إصدار التقرير',
            'Report version'
          )}
        </span>
      </div>
    </div>

    <div class="card">
      <h3 class="cardTitle">
        ${t(
          'بيانات القرار التاريخية',
          'Historical decision snapshot'
        )}
      </h3>

      <div class="decisionGrid">
        <div>
          <span>
            ${t(
              'الاسم',
              'Name'
            )}
          </span>

          <b>
            ${decision.name}
          </b>
        </div>

        <div>
          <span>
            ${t(
              'المسمى الوظيفي',
              'Job title'
            )}
          </span>

          <b>
            ${decision.title}
          </b>
        </div>

        <div>
          <span>
            ${t(
              'التاريخ والوقت',
              'Date & time'
            )}
          </span>

          <b>
            ${decision.time}
          </b>
        </div>

        <div>
          <span>
            ${t(
              'سبب الرفض أو الإعادة',
              'Reject / return reason'
            )}
          </span>

          <b>
            ${decision.reason}
          </b>
        </div>
      </div>

      <h3
        class="cardTitle"
        style="margin-top:15px"
      >
        ${t(
          'محتوى التقرير',
          'Report contents'
        )}
      </h3>

      <p class="sub">
        ${t(
          'رقم التقرير والمشروع والموقع والزيارة والمفتش والحراس والبنود والإجابات والأوزان والنتيجة والملاحظات والمخالفات والأدلة والإجراءات التصحيحية',
          'Report ID project site visit inspector guards items answers weights score notes findings evidence and corrective actions'
        )}
      </p>

      ${listItem(
        'qr-code',
        t(
          'QR للفيديو والأدلة',
          'QR for video/evidence'
        ),
        t(
          'الرابط يطلب تسجيل الدخول ويفحص الصلاحية',
          'Link requires login and permission check'
        )
      )}

      ${listItem(
        'history',
        t(
          'إصدارات التقرير',
          'Report versions'
        ),
        t(
          'الإصدارات السابقة لا تستبدل',
          'Previous versions are retained'
        )
      )}

      ${
        approved
          ? `
            <button
              class="btn primary"
              style="margin-top:12px"
              onclick="downloadApprovedReport('${id}')"
            >
              ${I('download')}

              ${t(
                'تنزيل التقرير المعتمد PDF',
                'Download approved PDF'
              )}
            </button>
          `
          : `
            <div
              class="policyHint"
              style="margin-top:12px"
            >
              ${I('lock')}

              ${t(
                'لا يظهر تنزيل التقرير المعتمد لأن الحالة ليست معتمدة',
                'Approved PDF download is hidden because status is not approved'
              )}
            </div>
          `
      }
    </div>
  `);
}

function downloadApprovedReport(
  id
) {
  toast(
    t(
      `تم السماح بتنزيل ${id} حسب صلاحية الحساب`,
      `Download allowed for ${id} under current permission`
    )
  );

  setTimeout(
    () => {
      window.print();
    },
    400
  );
}

function csv() {
  const rows =
    S.role === 'project_manager'
      ? [
          [
            'REP-2026-000094',
            'Al Waha',
            92,
            'Approved'
          ]
        ]
      : [
          [
            'REP-2026-000094',
            'Al Waha',
            92,
            'Approved'
          ],

          [
            'REP-2026-000091',
            'Palm Gate',
            81,
            'Pending'
          ]
        ];

  const csvText = [
    'report_id,project,score,status',
    ...rows.map(
      row => row.join(',')
    )
  ].join('\n');

  const blob =
    new Blob(
      [csvText],
      {
        type:
          'text/csv;charset=utf-8'
      }
    );

  const url =
    URL.createObjectURL(
      blob
    );

  const anchor =
    document.createElement(
      'a'
    );

  anchor.href = url;

  anchor.download =
    'sqms-demo-report.csv';

  anchor.click();

  URL.revokeObjectURL(
    url
  );

  toast(
    t(
      'تم إنشاء ملف CSV ضمن نطاق الصلاحية',
      'CSV generated within current permission scope'
    )
  );
}

function userModal() {
  modal(`
    <h2>
      ${t(
        'إنشاء حساب جديد',
        'Create New Account'
      )}
    </h2>

    <p class="sub">
      ${t(
        'الحساب يظل غير مفعل حتى يوقع المستخدم التعهد ثم تراجعه إدارة الجودة',
        'Account remains inactive until user signs undertaking and Quality Management reviews it'
      )}
    </p>

    <div
      class="formGrid"
      style="margin-top:14px"
    >
      <div class="field">
        <label>
          ${t(
            'الاسم',
            'Name'
          )}
        </label>

        <input
          class="input"
          value="${t(
            'ناصر الشمري',
            'Nasser Al Shammari'
          )}"
        >
      </div>

      <div class="field">
        <label>
          ${t(
            'البريد',
            'Email'
          )}
        </label>

        <input
          class="input"
          value="nasser@example.test"
        >
      </div>

      <div class="field">
        <label>
          ${t(
            'الدور',
            'Role'
          )}
        </label>

        <select class="select">
          <option>
            ${t(
              'مفتش الجودة',
              'Quality Inspector'
            )}
          </option>

          <option>
            ${t(
              'مدير مشروع',
              'Project Manager'
            )}
          </option>

          <option>
            ${t(
              'مشرف حراس',
              'Guard Supervisor'
            )}
          </option>
        </select>
      </div>

      <div class="field">
        <label>
          ${t(
            'المشروع',
            'Project'
          )}
        </label>

        <select class="select">
          <option>
            ${projectName(
              'P-001'
            )}
          </option>

          <option>
            ${projectName(
              'P-002'
            )}
          </option>
        </select>
      </div>
    </div>

    <div
      class="sensitive"
      style="margin-top:12px"
    >
      ${I('file-signature')}

      <div>
        <b>
          ${t(
            'التعهد قبل التفعيل',
            'Undertaking before activation'
          )}
        </b>

        <p>
          ${t(
            'بعد الحفظ يرسل رابط التعهد والتوقيع ويظل الحساب Pending Undertaking',
            'Saving sends undertaking and signature link and account remains Pending Undertaking'
          )}
        </p>
      </div>
    </div>

    <button
      class="btn primary"
      style="margin-top:12px"
      onclick="
        toast(
          t(
            'تم إنشاء الحساب بحالة بانتظار التعهد وإرسال رابط التوقيع',
            'Account created as Pending Undertaking and signature link sent'
          )
        );
        closeModal()
      "
    >
      ${t(
        'إنشاء وإرسال التعهد',
        'Create & send undertaking'
      )}
    </button>
  `);
}

function accessDenied() {
  modal(`
    <div
      style="
        text-align:center;
        padding:20px
      "
    >
      ${I('shield-x')}

      <h2>
        403 · Access Denied
      </h2>

      <p class="sub">
        ${t(
          'الحساب الحالي لا يملك صلاحية الوصول إلى هذا المشروع حتى عند محاولة فتح رابط مباشر',
          'Current account cannot access this project even through a direct URL attempt'
        )}
      </p>

      <button
        class="btn"
        onclick="closeModal()"
      >
        ${t(
          'إغلاق',
          'Close'
        )}
      </button>
    </div>
  `);
}

function restoreTest() {
  const box =
    document.querySelector(
      '#restoreResult'
    );

  if (!box) {
    return;
  }

  box.innerHTML = `
    <div
      class="policyHint"
      style="margin-top:12px"
    >
      ${I('loader-circle')}

      ${t(
        'جاري محاكاة استعادة قاعدة البيانات والمرفقات على بيئة منفصلة',
        'Simulating database and attachment restore on an isolated environment'
      )}
    </div>
  `;

  icons();

  setTimeout(
    () => {
      box.innerHTML = `
        <div
          class="policyHint"
          style="margin-top:12px"
        >
          ${I(
            'circle-check-big'
          )}

          ${t(
            'نجحت تجربة الاستعادة التجريبية وتمت مطابقة السجلات والمرفقات والصلاحيات',
            'Demo restore test passed and records attachments and permissions matched'
          )}
        </div>
      `;

      icons();
    },
    1400
  );
}

function initSignature() {
  const canvas =
    document.querySelector(
      '#sig'
    );

  if (!canvas) {
    return;
  }

  const ctx =
    canvas.getContext(
      '2d'
    );

  ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#e8c881';

  let drawing = false;

  function point(event) {
    const rect =
      canvas.getBoundingClientRect();

    const source =
      event.touches
        ? event.touches[0]
        : event;

    return {
      x:
        (
          source.clientX -
          rect.left
        ) *
        (
          canvas.width /
          rect.width
        ),

      y:
        (
          source.clientY -
          rect.top
        ) *
        (
          canvas.height /
          rect.height
        )
    };
  }

  function start(event) {
    event.preventDefault();

    drawing = true;
    S.signatureDone = true;

    const p =
      point(event);

    ctx.beginPath();

    ctx.moveTo(
      p.x,
      p.y
    );
  }

  function move(event) {
    if (!drawing) {
      return;
    }

    event.preventDefault();

    const p =
      point(event);

    ctx.lineTo(
      p.x,
      p.y
    );

    ctx.stroke();
  }

  function end() {
    drawing = false;
  }

  canvas.onmousedown =
    start;

  canvas.onmousemove =
    move;

  canvas.onmouseup =
    end;

  canvas.onmouseleave =
    end;

  canvas.ontouchstart =
    start;

  canvas.ontouchmove =
    move;

  canvas.ontouchend =
    end;
}

function clearSig() {
  const canvas =
    document.querySelector(
      '#sig'
    );

  if (!canvas) {
    return;
  }

  canvas
    .getContext('2d')
    .clearRect(
      0,
      0,
      canvas.width,
      canvas.height
    );

  S.signatureDone = false;
}

function submitRegistration() {
  if (!S.signatureDone) {
    toast(
      t(
        'التوقيع الإلكتروني إلزامي قبل إرسال الطلب',
        'Electronic signature is mandatory before submission'
      )
    );

    return;
  }

  toast(
    t(
      'تم حفظ التعهد والتوقيع وإشعار إدارة الجودة بالطلب',
      'Undertaking and signature saved and Quality Management notified'
    )
  );
}

function openSearch() {
  const layer =
    document.querySelector(
      '#searchLayer'
    );

  if (!layer) {
    return;
  }

  layer.classList.remove(
    'hidden'
  );

  setTimeout(
    () => {
      document
        .querySelector(
          '#globalSearch'
        )
        ?.focus();
    },
    60
  );

  search();
}

function closeSearch() {
  const layer =
    document.querySelector(
      '#searchLayer'
    );

  if (layer) {
    layer.classList.add(
      'hidden'
    );
  }
}

function search() {
  const data = [
    [
      'guard',
      'محمد العتيبي',
      'Mohammed Al Otaibi',
      'EMP-1042 · ID 1098765432 · P-001',
      'owner,quality_admin,quality_staff,project_manager,inspector,guard_supervisor'
    ],

    [
      'inspector',
      'خالد السالم',
      'Khaled Al Salem',
      'EMP-2201 · ID 1077001122 · 12 visits',
      'owner,quality_admin,quality_staff,project_manager'
    ],

    [
      'visit',
      'VIS-2026-000123',
      'VIS-2026-000123',
      'CASE VIS-2026-000123 · P-001 · 04 Oct 2026',
      'owner,quality_admin,quality_staff,project_manager,inspector'
    ],

    [
      'report',
      'REP-2026-000094',
      'REP-2026-000094',
      'CASE REP-2026-000094 · Approved · 92%',
      'owner,quality_admin,quality_staff,project_manager,inspector'
    ],

    [
      'action',
      'CAPA-2026-0041',
      'CAPA-2026-0041',
      'CASE CAPA-2026-0041 · Emergency gate · overdue',
      'owner,quality_admin,quality_staff,project_manager'
    ],

    [
      'training',
      'TRN-2026-0018',
      'TRN-2026-0018',
      'CASE TRN-2026-0018 · Crowd Management · pending',
      'owner,quality_admin,project_manager,guard_supervisor'
    ]
  ];

  const value =
    (
      document.querySelector(
        '#globalSearch'
      )?.value ||
      ''
    )
      .trim()
      .toLowerCase();

  let rows =
    data.filter(item => {
      return item[4]
        .split(',')
        .includes(S.role);
    });

  if (
    S.role === 'project_manager'
  ) {
    rows =
      rows.filter(item => {
        return !item[3].includes(
          'P-002'
        );
      });
  }

  if (value) {
    rows =
      rows.filter(item => {
        return (
          item[1] +
          item[2] +
          item[3]
        )
          .toLowerCase()
          .includes(value);
      });
  }

  const box =
    document.querySelector(
      '#searchResults'
    );

  if (!box) {
    return;
  }

  if (!rows.length) {
    box.innerHTML = `
      <div
        style="
          padding:30px;
          text-align:center;
          color:var(--muted)
        "
      >
        ${I('search-x')}

        <br>

        ${t(
          'لا توجد نتائج ضمن صلاحيات الحساب',
          'No results within this account scope'
        )}
      </div>
    `;

    icons();

    return;
  }

  box.innerHTML =
    rows
      .map(item => {
        return `
          <div class="searchResult">
            <div>
              <b>
                ${
                  S.lang === 'ar'
                    ? item[1]
                    : item[2]
                }
              </b>

              <span>
                ${item[3]}
              </span>
            </div>

            ${I(
              'arrow-up-left'
            )}
          </div>
        `;
      })
      .join('');

  icons();
}

function toggleLang() {
  S.lang =
    S.lang === 'ar'
      ? 'en'
      : 'ar';

  document.documentElement.lang =
    S.lang;

  document.documentElement.dir =
    S.lang === 'ar'
      ? 'rtl'
      : 'ltr';

  updateRole();

  toast(
    S.lang === 'ar'
      ? 'تم التحويل إلى العربية'
      : 'Switched to English'
  );
}

function notificationsModal() {
  modal(`
    <h2>
      ${t(
        'الإشعارات',
        'Notifications'
      )}
    </h2>

    <div
      class="list"
      style="margin-top:12px"
    >
      ${listItem(
        'clipboard-check',
        t(
          'تقرير بانتظار المراجعة',
          'Report pending review'
        ),
        t(
          'VIS-2026-000123 · قبل 8 دقائق',
          'VIS-2026-000123 · 8 minutes ago'
        )
      )}

      ${listItem(
        'siren',
        t(
          'حالة حرجة',
          'Critical finding'
        ),
        t(
          'تم إشعار إدارة المشروع فورًا',
          'Project Management was notified immediately'
        ),
        B(
          t(
            'فوري',
            'Immediate'
          ),
          'danger'
        )
      )}

      ${listItem(
        'clock-alert',
        t(
          'تصعيد أصفر بعد 3 أيام',
          'Yellow escalation after 3 days'
        ),
        t(
          'تمت محاكاة إرسال بريد للجهة المسؤولة',
          'Email to responsible party simulated'
        ),
        B(
          t(
            'أصفر',
            'Yellow'
          ),
          'warning'
        )
      )}

      ${listItem(
        'lock-keyhole',
        t(
          'تحديث في قناة خاصة',
          'Private channel update'
        ),
        t(
          'لا يظهر محتوى البلاغ في الإشعار',
          'Sensitive content is not exposed in notification'
        )
      )}
    </div>
  `);
}

document.addEventListener(
  'DOMContentLoaded',
  () => {
    setupRoles();

    updateRole();

    const menu =
      document.querySelector(
        '#menu'
      );

    if (menu) {
      menu.onclick = () => {
        document
          .querySelector(
            '#sidebar'
          )
          ?.classList.toggle(
            'open'
          );
      };
    }

    const roleButton =
      document.querySelector(
        '#roleBtn'
      );

    if (roleButton) {
      roleButton.onclick =
        event => {
          event.stopPropagation();

          document
            .querySelector(
              '#roleMenu'
            )
            ?.classList.toggle(
              'open'
            );
        };
    }

    const language =
      document.querySelector(
        '#lang'
      );

    if (language) {
      language.onclick =
        toggleLang;
    }

    const bell =
      document.querySelector(
        '#bell'
      );

    if (bell) {
      bell.onclick =
        notificationsModal;
    }

    const searchButton =
      document.querySelector(
        '#searchBtn'
      );

    if (searchButton) {
      searchButton.onclick =
        openSearch;
    }

    const searchClose =
      document.querySelector(
        '#searchClose'
      );

    if (searchClose) {
      searchClose.onclick =
        closeSearch;
    }

    const globalSearch =
      document.querySelector(
        '#globalSearch'
      );

    if (globalSearch) {
      globalSearch.oninput =
        search;
    }

    const modalClose =
      document.querySelector(
        '#modalClose'
      );

    if (modalClose) {
      modalClose.onclick =
        closeModal;
    }

    const modalLayer =
      document.querySelector(
        '#modal'
      );

    if (modalLayer) {
      modalLayer.onclick =
        event => {
          if (
            event.target.id ===
            'modal'
          ) {
            closeModal();
          }
        };
    }

    const searchLayer =
      document.querySelector(
        '#searchLayer'
      );

    if (searchLayer) {
      searchLayer.onclick =
        event => {
          if (
            event.target.id ===
            'searchLayer'
          ) {
            closeSearch();
          }
        };
    }

    document.addEventListener(
      'click',
      event => {
        if (
          !event.target.closest(
            '.roleWrap'
          )
        ) {
          document
            .querySelector(
              '#roleMenu'
            )
            ?.classList.remove(
              'open'
            );
        }
      }
    );

    document.addEventListener(
      'keydown',
      event => {
        if (
          (
            event.ctrlKey ||
            event.metaKey
          ) &&
          event.key.toLowerCase() ===
            'k'
        ) {
          event.preventDefault();

          openSearch();
        }

        if (
          event.key ===
          'Escape'
        ) {
          closeModal();
          closeSearch();
        }
      }
    );

    icons();
  }
);