import Home from "@/components/Home";
import User from "@/components/User/User";
import UserStart from "@/components/User/UserStart";
import UserInfo from "@/components/User/UserInfo";
import UserEdit from "@/components/User/UserEdit";

export const routes = [
  {
    path: '', component: Home, name: 'Home'
  },
  {
    path: '/user', component: User, children: [
      {path: '', component: UserStart},
      {path: ':id', component: UserInfo},
      {path: ':id/edit', component: UserEdit, name: 'UserEdit'},
    ]
  },
  {path: '*', component: Home}
]