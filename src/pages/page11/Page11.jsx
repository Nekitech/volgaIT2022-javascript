import React, {useContext} from 'react'
import classes from './Page11.module.css'
import Circle from '../../components/UI/circle/Circle'
import ButtonSend from '../../components/UI/buttonSend/ButtonSend'
import { UserAnswer } from '../../context'
function Page11() {
  let {ans} = useContext(UserAnswer)
  let url = document.querySelector('[data-source]')?.dataset?.source || 'https://example.com/?'
  return (
    <section className='page'>
        <Circle style={{marginTop:'38px'}} url={'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTU4Ljc1IDEzLjc1SDQzLjYzODdDNDYuMTk2MiAxMi4yOTUgNDcuNSAxMC4yMTUgNDcuNSA3LjVDNDcuNSAwLjc3NzUgNDMuMjIgMCA0MCAwQzM1Ljg3MzcgMCAzMS45MzUgNC43MzYyNSAzMCA5LjUwMjVDMjguMDY1IDQuNzM2MjUgMjQuMTI3NSAwIDIwIDBDMTYuNzggMCAxMi41IDAuNzc3NSAxMi41IDcuNUMxMi41IDEwLjIxNSAxMy44MDM3IDEyLjI5NSAxNi4zNjEyIDEzLjc1SDEuMjVDMC41NiAxMy43NSAwIDE0LjMwODcgMCAxNVYzMEMwIDMwLjY5MTIgMC41NiAzMS4yNSAxLjI1IDMxLjI1SDMuNzVINi4yNUgyMy43NVYxNi4yNUgyNi4yNVYzMS4yNUgzMy43NVYxNi4yNUgzNi4yNVYzMS4yNUg1My43NUg1Ni4yNUg1OC43NUM1OS40NCAzMS4yNSA2MCAzMC42OTEyIDYwIDMwVjE1QzYwIDE0LjMwODcgNTkuNDQgMTMuNzUgNTguNzUgMTMuNzVaTTE1IDcuNUMxNSAzLjMxNzUgMTYuODMzNyAyLjUgMjAgMi41QzIzLjY0IDIuNSAyNy45NTYzIDguOTQ2MjUgMjguNjUyNSAxMy43MzVDMjIuMTMyNSAxMy41OTI1IDE1IDEyLjMzIDE1IDcuNVpNMzEuMzQ3NSAxMy43MzVDMzIuMDQzOCA4Ljk0NjI1IDM2LjM2IDIuNSA0MCAyLjVDNDMuMTY2MiAyLjUgNDUgMy4zMTc1IDQ1IDcuNUM0NSAxMi4zMyAzNy44Njc1IDEzLjU5MjUgMzEuMzQ3NSAxMy43MzVaTTM2LjI1IDMzLjc1SDUzLjc1VjU4Ljc1QzUzLjc1IDU5LjQ0MTIgNTMuMTkgNjAgNTIuNSA2MEg3LjVDNi44MSA2MCA2LjI1IDU5LjQ0MTIgNi4yNSA1OC43NVYzMy43NUgyMy43NVY1Ny41SDI2LjI1VjMzLjc1SDMzLjc1VjU3LjVIMzYuMjVWMzMuNzVaIiBmaWxsPSIjMjE5NkYzIi8+Cjwvc3ZnPgo='}/>
        <h3 className={classes.end_page__title}>We've found some awesome frames for you!</h3>
        <p className={classes.end_page__text}>Send the results to your email to receive special discounts.</p> 
        <ButtonSend text={"Send"} onClick={() => {
          for(let [key, value] of Object.entries(ans)){
            if(value == false){
              continue
            }
            url += key + '=' + value + '&'
          }
          
          console.log(`URL: [${url.replace(/.$/g, '')}]`)
        }}/>
        <p className={classes.end_page__textBottom} style={{marginTop:'98px'}}>By clicking ‘Send’ you agree to our Terms of Use & Privacy Policy and receiving promotion emails</p>
    </section>
  )
}

export default Page11