import { ElMenu, ElMenuItem, ElSubMenu } from 'element-plus';
import { defineComponent } from 'vue';
import { RouteRecordRaw } from 'vue-router';
import { routes } from '../../router';
import s from './index.module.less'
export const SlideBar = defineComponent({
  setup: (props, context) => {
    const filterRoutes = routes.filter((route)=> route.path === "")[0]?.children

    const renderItem = (route: RouteRecordRaw) => {
      return (
        <>
          {route.path ? (
            <ElMenuItem index={route.path}>{route.name}</ElMenuItem>
          ) : null} 
        </>
      )
    }

    return () => (
      <div class={s.slideBarWrapper}>
        <ElMenu
          activeTextColor='#ffd04b' 
          backgroundColor='#545c64'
          class={"el-menu-vertical-demo"}
          textColor="#fff"
          router
        >
          {
            filterRoutes!.map(route => (
              <>
                {
                  route.children && !!route.children.length ? (
                    <ElSubMenu index={route.path}
                      v-slots={
                        {
                          title: () => (<span>{route.name}</span>)
                        }
                      } 
                    >
                        {
                          route.children.map(child => renderItem(child))
                        }
                      </ElSubMenu>
                  ) : renderItem(route)
                } 
              </>
            ))
          }
        </ElMenu>
      </div>
    )
  }
});