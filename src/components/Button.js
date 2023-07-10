// import PropTypes from 'prop-types';
import className from 'classnames';
import { twMerge } from 'tailwind-merge';

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) {

    let classes = className(rest.className, 'flex items-center px-3 py-1.5 border', {
        // 'border-sky-500': primary,
        // 'border-gray-600': secondary,
        // 'border-green-500': success,
        // 'border-yellow-400': warning,
        // 'border-red-500': danger,

        // 'bg-sky-500': primary && !outline,
        // 'bg-gray-600': secondary && !outline,
        // 'bg-green-500': success && !outline,
        // 'bg-yellow-400': warning && !outline,
        // 'bg-red-500': danger && !outline,
        // 'bg-white': outline,

        // 'text-white': !outline && (primary || secondary || success || warning || danger),
        // 'text-sky-500': outline && primary,
        // 'text-gray-600': outline && secondary,
        // 'text-green-500': outline && success,
        // 'text-yellow-400': outline && warning,
        // 'text-red-500': outline && danger,

        // 'rounded-full': rounded,

        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-400': outline && warning,
        'text-red-500': outline && danger,
    });

    classes = twMerge(classes);

    return (
        <div>
            <button {...rest} className={classes} > {children}</button>
        </div >
    );
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
        const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger);

        if (count > 1) {
            return new Error('Only one of primary, secondary, success, warning and danger can be true');
        }
    }
};
export default Button;