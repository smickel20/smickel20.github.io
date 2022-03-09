---
permalink: animation.html
output: html_document
runtime: shiny
---

```{r, echo = FALSE}
numericInput("n", 
 "How many cars?", 5)
renderTable({
 head(cars, input$n)
})
```
  <style>  
    body
    {
    display : center;
      margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;
    }
.hu__hu__ { animation: hu__hu__ infinite 2s ease-in-out }
@keyframes hu__hu__ {
    50% { transform: translateY(30px) }
}
</style>  
<body>

  <h1><div class="cssanimation hu__hu__"> Animations </div></h1>
</body>
