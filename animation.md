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
