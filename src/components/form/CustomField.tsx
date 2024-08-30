import { Control } from 'react-hook-form'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../ui/form'
import { Input } from '../ui/input'
import { FieldType } from './index.enum'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import React from 'react'
import { cn } from '@/lib/utils'
import { Textarea } from '../ui/textarea'

type CustomFieldProps = {
  fieldName: string
  label: string
  description?: string
  control: Control<any>
  fieldType: FieldType
  placeholder: string
  className?: string
}

type RenderFieldProps = {
  field: any
  props: CustomFieldProps
}

const RenderField = ({ field, props }: RenderFieldProps) => {
  const { placeholder, fieldType, label } = props

  switch (fieldType) {
    case FieldType.INPUT:
      return <Input placeholder={placeholder} {...field} />

    case FieldType.TEXTAREA:
      return <Textarea placeholder={placeholder} {...field} />

    case FieldType.RADIO:
      return (
        <RadioGroup defaultValue='comfortable' className='flex gap-4'>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='default' id='r1' />
            <Label htmlFor='r1'>Yes</Label>
          </div>
          <div className='flex items-center space-x-2'>
            <RadioGroupItem value='comfortable' id='r2' />
            <Label htmlFor='r2'>No Thanks</Label>
          </div>
        </RadioGroup>
      )
    case FieldType.SELECT:
      return (
        <Select>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{label}</SelectLabel>
              <SelectItem value='apple'>Apple</SelectItem>
              <SelectItem value='banana'>Banana</SelectItem>
              <SelectItem value='blueberry'>Blueberry</SelectItem>
              <SelectItem value='grapes'>Grapes</SelectItem>
              <SelectItem value='pineapple'>Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      )
    default:
      return <div>No Input Selected </div>
  }
}

const CustomField = (props: CustomFieldProps) => {
  const { control, fieldName, label, description, fieldType, className } = props
  return (
    <>
      <div className={cn('w-full', className)}>
        <FormField
          control={control}
          name={fieldName}
          render={({ field }) => (
            <FormItem>
              {fieldType !== FieldType.CHECKBOX && label && (
                <FormLabel>{label}</FormLabel>
              )}

              {fieldType === FieldType.RADIO && description && (
                <FormDescription>{description}</FormDescription>
              )}
              <FormControl>
                <RenderField field={field} props={props} />
              </FormControl>

              {fieldType !== FieldType.RADIO && description && (
                <FormDescription>{description}</FormDescription>
              )}
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  )
}

export default CustomField
