function checkPassword() {
    const input = document.getElementById("key").value;
    const messageholder = document.getElementById("finalmessage");

    if (input === "脱走兵オガタ") {
        messageholder.innerHTML = "かれんさんは多分しにました。<br>原因はおそらく一酸化炭素中毒。<br>あなたが一番大切だった。大好きだよ。<br>Twitter(自称X)のアカウントも渡しておくね。<br>Passは全て6066karenmasyuだよ。<br>消してる垢もあるかもしれないしログインできるかわかんないけど。<br>-@masyumaro_chang<br>-@masyu_creamsan<br>-@ichigomasyuchang93<br>-@_shrimppasta<br>-@whitemasyusan<br>-@uchiyoso_masyu<br>-@yamisulfur<br>このサイトを読んで48時間以内に私からの連絡が一切来なかったら死亡報告でもしといて大丈夫。<br>最後まで迷惑かけてごめんね。<br>ありがとう。";
    } else {
        messageholder.textContent = "パスワードが違うみたい…"
    }
}