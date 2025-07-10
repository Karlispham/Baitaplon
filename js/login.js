const translations = {
  en: {
    title: "Sign In",
    email: "Email or mobile number",
    passwword: "Password",
    remember: "Remember me",
    forgot: "Forgot Password?",
    btn: "Sign In",
    or: "OR",
    btn_or: "Use a Sign-In Code",
    register: "Don't have an account?",
    link: "Register",
    contact: "Questions? Contact us.",
    faq: "FAQ",
    cookie: "Cookie Preferences",
    help: "Help Center",
    corp: "Corporate Information",
    terms: "Terms of Use",
    privacy: "Privacy"
  },
  vi: {
    title: "Đăng nhập",
    email: "Email hoặc số điện thoại",
    passwword: "Mật khẩu",
    remember: "Lưu đăng nhập",
    forgot: "Quên mật khẩu?",
    btn: "Đăng nhập",
    or: "HOẶC",
    btn_or: "Dùng mã để đăng nhập",
    register: "Bạn chưa có tài khoản?",
    link: "Đăng ký",
    contact: "Câu hỏi? Liên hệ với chúng tôi.",
    faq: "Câu hỏi thường gặp",
    cookie: "Tuỳ chọn Cookie",
    help: "Trung tâm trợ giúp",
    corp: "Thông tin công ty",
    terms: "Điều khoản sử dụng",
    privacy: "Chính sách bảo mật"
  },
  ko: {
    title: "로그인",
    email: "이메일 또는 휴대폰 번호",
    passwword: "비밀번호",
    remember: "로그인 상태 유지",
    forgot: "비밀번호를 잊으셨나요?",
    btn: "로그인",
    or: "또는",
    btn_or: "로그인 코드 사용",
    register: "계정이 없으신가요?",
    link: "회원가입",
    contact: "질문이 있으신가요? 문의하세요.",
    faq: "자주 묻는 질문",
    cookie: "쿠키 설정",
    help: "고객센터",
    corp: "회사 정보",
    terms: "이용 약관",
    privacy: "개인정보 처리방침"
  },
  zh: {
    title: "登录",
    email: "电子邮件或手机号码",
    passwword: "密码",
    remember: "保持登录状态",
    forgot: "忘记密码？",
    btn: "登录",
    or: "或",
    btn_or: "使用登录验证码",
    register: "还没有账号？",
    link: "注册",
    contact: "有问题？请联系我们。",
    faq: "常见问题",
    cookie: "Cookie 设置",
    help: "帮助中心",
    corp: "公司信息",
    terms: "使用条款",
    privacy: "隐私政策"
  }

};

const langSelector = document.getElementById("lang");
const themeSwitch = document.getElementById("theme-switch");
const elements = document.querySelectorAll("[data-i18n]");
const placeholders = {
  email: document.querySelector('input[placeholder][data-i18n-placeholder="email"]'),
  passwword: document.querySelector('input[placeholder][data-i18n-placeholder="passwword"]')
};

// ✅ Thay đổi ngôn ngữ
function changeLanguage(lang) {
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Cập nhật placeholder input
  if (placeholders.email && translations[lang].email) {
    placeholders.email.placeholder = translations[lang].email;
  }
  if (placeholders.passwword && translations[lang].passwword) {
    placeholders.passwword.placeholder = translations[lang].passwword;
  }

  localStorage.setItem("language", lang);
}

// ✅ Chuyển giao diện sáng/tối
function toggleTheme(isDark) {
  if (isDark) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}



// ✅ Khi người dùng thay đổi ngôn ngữ
langSelector.addEventListener("change", () => {
  const lang = langSelector.value;
  changeLanguage(lang);
});

// ✅ Khi người dùng bật/tắt giao diện sáng tối
themeSwitch.addEventListener("change", () => {
  toggleTheme(themeSwitch.checked);
});
