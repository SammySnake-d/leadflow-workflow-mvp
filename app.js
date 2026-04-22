const contactEmail = "caxapokrq+sammy@gmail.com";

const subject = "我要预约 LeadFlow 外贸客户开发工作流包内测";
const body = [
  "我想预约 LeadFlow 外贸客户开发工作流包内测。",
  "",
  "我的产品/行业：",
  "目标市场：",
  "现在怎么找客户：",
  "我愿意接受的价格：99 元 / 199 元 / 其他：",
  "我最想自动化的步骤：找公司 / 筛客户 / 写开发信 / 跟进提醒",
].join("\n");

const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

document.querySelectorAll("#primaryCta, #emailIntent").forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = mailto;
  });
});

document.querySelector("#copyIntent").addEventListener("click", async () => {
  const text = `${subject}\n\n${body}`;
  const status = document.querySelector("#copyStatus");

  try {
    await navigator.clipboard.writeText(text);
    status.textContent = "已复制。把这段发给卖家即可预约内测。";
  } catch {
    status.textContent = "复制失败，请直接点击邮件预约。";
  }
});
