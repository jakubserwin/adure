// prettier-ignore
import {
  HeartOutline, MapMarkerOutline, TreeOutline, StarOutline,
} from 'mdue';

import { shallowRef } from 'vue';

export default [
  {
    id: 1,
    icon: shallowRef(HeartOutline),
    title: 'fit',
    desc: 'Lorem ipsum dolor sit amet, consectetur',
  },
  {
    id: 2,
    icon: shallowRef(MapMarkerOutline),
    title: 'guidance',
    desc: 'Lorem ipsum dolor sit amet, consectetur',
  },
  {
    id: 3,
    icon: shallowRef(TreeOutline),
    title: 'wild nature',
    desc: 'Lorem ipsum dolor sit amet, consectetur',
  },
  {
    id: 4,
    icon: shallowRef(StarOutline),
    title: 'hight rated',
    desc: 'Lorem ipsum dolor sit amet, consectetur',
  },
];
