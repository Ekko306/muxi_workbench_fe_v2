# Icon
> 项目所有svg图标的通用使用组件
---
API:  

|  属性   | 是否必须  | 类型 | 默认值 |
|  :----:  | :----:  | :----: | :----: |
| src  | ✅ | string | 无 |
| width  | ❌ | number| 22 |
| height | ❌ | number | 22 |

---
示例
```js
import React from 'react'
import Icon from 'components/icon'
import infoIcon from 'assets/svg/commonIcon/info.svg'

const Example:React.FC = () => {
    return (
        <>
            <div>
                <Icon src={infoIcon} />
            </div>
         </>
    )    
}
```
