window.onload = function() {
  document.querySelectorAll('.sm > p, .pr, li, caption').forEach((element) => {
    element.innerHTML = element.innerHTML.replace(/(?:(?<=\w[aeiouyà-æè-ïò-öø-ýÿ])|(?<=[aeiouyyà-æè-ïò-öø-ýÿ][lmnrsx])|(?<=[aeiouyyà-æè-ïò-öø-ýÿ][bdn]s))(?=(?:[b-dfgj-np-tvxzç]|[cln]h|[bcdfgpt][lr])[aeiouyà-æè-ïò-öø-ýÿ])|(?<=[aeiouyà-æè-ïò-öø-ýÿ][bcdgp])(?=(?:[bcdfgjkmnpqstvwxzç]|[cln]h|[bcdfgpt][lr])[aeiouyà-æè-ïò-öø-ýÿ])|(?<=\w(?<![gq])[aeiouyà-âä-æè-ïò-ôöø-ýÿ])(?=[aeoà-æè-ïò-öø-ýÿ]\w)|(?<=\w\w)(?=-\w\w)/gi, "\u00AD")
  })

  document.querySelectorAll('h1, h2, h3, h4, p, li, th, td, caption').forEach((element) => {
    element.innerHTML = element.innerHTML.replace(/-/g, "\u2011")
  })

  /*document.querySelector("body").addEventListener("copy", (event) => {
    event.clipboardData.setData("text/plain", document.getSelection().toString().replace(/\u00AD/g, "").replace(/\u2011/g, "-"))
    event.preventDefault();
  })*/
}
