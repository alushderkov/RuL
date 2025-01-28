const initialization = require('./materialsParams.js');

class Controller {

    async firstPageOnLoad(req, res) {

        const materials = await initialization('Materials.json');
        const nounTests = materials.russianSections.morphology.independentParts.noun.tests;

        const firstTask = nounTests[0].pages[0].task;
        const firstRule = nounTests[0].pages[0].rule;

        const firstPageData = {
            task: firstTask,
            rule: firstRule,
        };

        res.json(firstPageData);

    }

    async checkButtonClick(req, res) {

        const materials = await initialization('Materials.json');
        const nounTests = materials.russianSections.morphology.independentParts.noun.tests;
        const test = nounTests[0];
        let { editableInput, page } = req.body;

        function updateData(ToF_field, task_field, rule_field, page_field) {

            const updatedData = {
                ToF: ToF_field,
                task: task_field,
                rule: rule_field,
                page: page_field,
            }

            res.json(updatedData);

        }

        function isTestFinish(page, test) {
            const result = (test.pages[page] === undefined);
            if (result) {
                updateData('Вы прошли тест!', 'Заданий больше нет.', 'Отправляйтесь к следующему тесту!', page);
                return true;
            }
            return false;
        }

        function isCorrectAnswer(page, test) {

            if (editableInput == test.pages[page].answer) {
                page++;
                if (!isTestFinish(page, test))
                updateData('Правильно! Новое задание!', test.pages[page].task, test.pages[page].rule, page);
            } else {
                updateData('Неверно, попробуйте ещё раз!', test.pages[page].task, test.pages[page].rule, page);
            }

        }

        if (!isTestFinish(page, test)) {
            isCorrectAnswer(page, test);
        }

    }

}

module.exports = new Controller();

