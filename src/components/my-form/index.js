import MyFormCtrl from './my-form.controller';
import MyFormTemplate from './my-form.template.html';

export default {
    template: MyFormTemplate,
    controller: MyFormCtrl,
    bindings: {
        handleSubmit: '=',
        formData: '='
    },
}