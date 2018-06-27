import MyListController from './my-list.controller';
import MyListTemplate from './my-list.template.html';
import './my-list.styles.css';

export default {
    template: MyListTemplate,
    bindings: {
        name: '=',
    },
    controller: MyListController,
}