const appArticleItem = document.getElementById('root-article');

const appArticle = params => {
    return (`
        <article class="articleForm article desactive">
            <div class="itemArticle-title flex">
                <h3 class="articleTitle"> ${params.title} </h3>
                <p class="articleText"> ${params.desc} </p>
            </div>
            <div class="itemArticle-input flex">
                <h3 class="articleTitle item"> Input </h3>
                <div class="itemArticle-content flex">
                    <form id="${params.idForm}" class="form">
                        <div class="ctn-form">
                            <label class="labelForm">${params.input1}</label>
                            <input type="text" name="input1" class="inputForm">
                        </div>
                        <div class="ctn-form">
                            <label class="labelForm">${params.input2}</label>
                            <input type="text" name="input2" class="inputForm">
                        </div>
                        <div class="ctn-form">
                            <button type="submit" class="buttonForm">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="itemArticle-output flex">
                <h3 class="articleTitle item"> Output </h3>
                <div class="itemArticle-content flex">
                    <div class="ctn-output">
                        <label class="labelOutput" id="idOutput">
                            Resultado:
                        </label>
                        <p class="result" id="${params.idResultado}">
                        
                        </p>
                    </div>
                </div>
            </div>
        </article>
`);
}

appLinksData.forEach(linkData => {
    const articleHtml = appArticle(linkData);
    appArticleItem.insertAdjacentHTML('beforeend', articleHtml);
});