// src/components/FormField.jsx

/**
 * Shared form field wrapper used by Contact.jsx and Enquiry.jsx.
 *
 * - as: "input" | "textarea" | "select"
 * - required: shows a visual "*" next to the label (Enquiry-style)
 * - nativeRequired: sets the native HTML `required` attribute (Contact-style)
 * - error: shows a .form-error line under the field and sets aria-invalid
 * - footer: overrides the default error line entirely (for composite
 *   footers, e.g. Enquiry's character counter under the message field)
 * - children: option elements, when as="select"
 * - ...rest: passed straight through to the underlying input/textarea/select
 */
export default function FormField({
  as = "input",
  id,
  label,
  required = false,
  nativeRequired = false,
  error,
  footer,
  children,
  ...rest
}) {
  const Tag = as;

  return (
    <div className="form-field">
      <label htmlFor={id}>
        {label}
        {required && <span>*</span>}
      </label>

      <Tag
        id={id}
        name={id}
        required={nativeRequired}
        aria-invalid={error ? true : undefined}
        {...rest}
      >
        {children}
      </Tag>

      {footer
        ? footer
        : error && <small className="form-error">{error}</small>}
    </div>
  );
}
