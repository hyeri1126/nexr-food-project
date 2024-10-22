//기본적으로는 localhost:3000/meals/share 처럼 share 또한
// 동적 segment로 사용되는게 맞으나 next.js는 그것을 인지하지 못하고 
// 보다 구체적으로 명명된 폴더가 있다는 것을 알고 app/share/page.js 페이지로 라우팅한다. 

export default function mealsSlugPage ({params}) {
    return <main>
        <h1>This is meals {params.slug}  Page.</h1>
    </main>
}