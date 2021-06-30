export default function validate(values, validationList) {
    let errors = {};

    validationList.map((type) => {
        switch (type) {
            case 'name_of_child':
                if (!values.name_of_child) errors.name_of_child = 'Name of child is required';
                break;

            case 'age':
                if (!values.age) errors.age = 'Child age is required';
                break;

            case 'date_of_birth':
                if (!values.date_of_birth) errors.date_of_birth = 'Date of birth is required';
                break;

            case 'gender':
                if (!values.gender) errors.gender = 'Child gender is required';
                break;

            case 'level':
                if (!values.level) errors.level = 'Level is required';
                break;

            case 'name_of_parent':
            case 'name_of_guardian':
                if (!values.name_of_parent && !values.name_of_guardian) errors.name_of_parent = 'Parent/Gaurdian name is required';
                break;

            case 'address':
                if (!values.address) errors.address = 'Parent/Gaurdian address is required';
                break;

            case 'contact':
                if (!values.contact) errors.contact = 'Parent/Gaurdian contact is required';
                break;

            case 'is_sms':
                if (!values.is_sms) errors.is_sms = 'Verify text message contact';
                break;

            case 'signature':
                if (!values.signature) errors.signature = 'Name of certifier is required';
                break;

            default:
                break;
        }

        return errors;
    });

    return errors;
}
