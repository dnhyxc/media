import Home from '../home';
import Detial from '../person'
import Archive from '../archive'
import Apply from '../apply'
import Approval from '../approval'
import Storage from '../storage'
import Account from '../account'
import Member from '../member'
import Power from '../power'

export const Config = [
  {
    key: 'app',
    path: '/app',
    component: Home,
  },
  {
    key: 'person',
    path: '/person',
    component: Detial,
  },
  {
    key: 'archive',
    path: '/archive',
    component: Archive,
  },
  {
    key: 'apply',
    path: '/apply',
    component: Apply,
  },
  {
    key: 'approval',
    path: '/approval',
    component: Approval,
  },
  {
    key: 'storage',
    path: '/storage',
    component: Storage,
  },
  {
    key: 'account',
    path: '/account',
    component: Account,
  },
  {
    key: 'member',
    path: '/member',
    component: Member,
  },
  {
    key: 'power',
    path: '/power',
    component: Power,
  },
]