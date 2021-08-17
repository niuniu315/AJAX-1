let n = 1
getPage.onclick = () => {
        const request = new XMLHttpRequest()
        request.open("GET", `/page${n + 1}`)
        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
                const array = JSON.parse(request.response)
                array.forEach(item => {
                    const li = document.createElement("li")
                    li.textContent = item.id
                    xxx.appendChild(li)
                })
                n += 1
            }
        }
        request.send()
    }
    // 通过onreadystatechange 监听  
getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/5.json")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(typeof request.response)
            console.log(request.response)
            const bool = JSON.parse(request.response)
            console.log(typeof bool)
                //typeof 取消空格
            console.log(bool)
        }
    }
    request.send()
}
getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/4.xml")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName("warning")[0].textContent
                // getElementsByTagName 默认返回的是数组，
            console.log(text.trim())
                //  trim不返回回车
        }
    }
    request.send()
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onload = () => {
        const div = document.createElement("div")
            //创建div 标签
        div.innerHTML = request.response
            //填写div内容
        document.body.appendChild(div)
            //插到头里面
    }
    request.onerror = () => {}
    request.send()
}


getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onload = () => {
        const script = document.createElement('script')
            //创建script 标签
        script.innerHTML = request.response
            //填写script 内容
        document.head.appendChild(script)
            // 将标签插到头里面
    }
    request.onerror = () => {}
    request.send()

}

// 监听HTML里面 id 为 getCSS 的事件 
getCSS.onclick = () => {
        const request = new XMLHttpRequest()
        request.open("GET", "/style.css")
        request.onload = () => {
            const style = document.createElement('style')
                //创建style标签
            style.innerHTML = request.response
                //填写style内容
            document.head.appendChild(style)
                // 将标签插到头里面
        }
        request.onerror = () => {}
        request.send()
    }
    // getCSS.onclick = () => {
    //     const request = new XMLHttpRequest()
    //     request.onreadystatechange = () => {
    //         if(request.readyState ===4) {
    //             if(request.status >= 200 && request.status < 300){
    //                 const style = document.createEvent("style")
    //                 style.innerHTML = request.response
    //                 document.head.appendChild(style)
    //             }else{
    //                 alert('加载CSS失败')
    //             }
    //         }
    //     }  
    //     request.open("GET", "/style.css")  
    //     request.send()
    // }