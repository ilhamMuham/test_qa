import React from 'react'
import TextField from '@mui/material/TextField'

const Input = (props) => {
  return (
    <div>
      {props.disable ? <TextField
        name={props.name}
        rows={props.rowsMax}
        rowsMax={props.rowsMax}
        InputProps={{
          readOnly: true,
        }}
        multiline={props.multiline}
        onChange={props.form && props.name && props.form.handleChange(props.name)}
        onBlur={props.form && props.name && props.form.handleBlur(props.name)}
        error={
          props.form && props.name && props.form.touched[props.name] && !!props.form.errors[props.name]
        }
        value={(props.form && props.name && `${props.form.values[props.name]}`) || props.value}
        helperText={
          props.form && props.name && props.form.touched[props.name] && props.form.errors[props.name]
            ? props.form.errors[props.name]
            : ' '
        }
        {...props}
        style={{ ...props.style, width: '100%' }}
      /> : props.type === 'float' ? (
        <TextField
          name={props.name}
          rows={props.rowsMax}
          rowsMax={props.rowsMax}
          multiline={props.multiline}
          onChange={e => props.form && props.form.setFieldValue(props.name, e.target.value)}
          onBlur={props.form && props.name && props.form.handleBlur(props.name)}
          error={
            props.form && props.name && props.form.touched[props.name] && !!props.form.errors[props.name]
          }
          value={(props.form && props.name && `${props.form.values[props.name]}`) || props.value}
          helperText={
            props.form && props.name && props.form.touched[props.name] && props.form.errors[props.name]
              ? props.form.errors[props.name]
              : ' '
          }
          {...props}
          style={{ ...props.style, width: '100%' }}
        />
      ) : <TextField
        name={props.name}
        rows={props.rowsMax}
        rowsMax={props.rowsMax}
        multiline={props.multiline}
        onChange={props.form && props.name && props.form.handleChange(props.name)}
        onBlur={props.form && props.name && props.form.handleBlur(props.name)}
        error={
          props.form && props.name && props.form.touched[props.name] && !!props.form.errors[props.name]
        }
        value={(props.form && props.name && `${props.form.values[props.name]}`) || props.value}
        helperText={
          props.form && props.name && props.form.touched[props.name] && props.form.errors[props.name]
            ? props.form.errors[props.name]
            : ' '
        }
        {...props}
        style={{ ...props.style, width: '100%' }}
      />}
    </div>
  )
}
export default Input
