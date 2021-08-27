import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, AbstractControlOptions, ValidatorFn, AsyncValidatorFn, FormControl, FormArray } from '@angular/forms';

type UnpackArrayType<T> = T extends (infer R)[] ? R : T;

type TypedControllerValue<T> = (
  T extends TypedFormGroup<unknown> ? T['value'] :
  T extends TypedFormArray<unknown> ? T['value'] :
  T
);

type TypedController<T> = (
  T extends FormArray ? TypedFormArray<UnpackArrayType<T['value']>> : (
    T extends FormGroup ? TypedFormGroup<T['value']> :
    TypedAbstractControl<T>
  )
);

export declare abstract class TypedAbstractControl<T> extends AbstractControl {
  readonly value: T;
  abstract setValue(value: T, options?: Object): void;
  abstract patchValue(value: T, options?: Object): void;
  abstract reset(value?: T, options?: Object): void;
}

export declare abstract class TypedFormControl<T> extends FormControl {
  readonly value: T
  reset(value: Parameters<TypedAbstractControl<T>['reset']>[0], options?: Parameters<FormControl['reset']>[1]): void;
  patchValue(value: Parameters<TypedAbstractControl<T>['patchValue']>[0], options?: Parameters<FormControl['patchValue']>[1]): void;
  setValue(value: Parameters<TypedAbstractControl<T>['setValue']>[0], options?: Parameters<FormControl['setValue']>[1]): void
}


export declare abstract class TypedFormGroup<T> extends FormGroup {
  readonly value: { [P in keyof T]: TypedControllerValue<T[P]> };
  controls: { [P in keyof T]: TypedController<T[P]> };
  patchValue(value: { [P in keyof Partial<T>]: TypedAbstractControl<T[P]> }, options?: { onlySelf?: boolean; emitEvent?: boolean; }): void;
  setValue(value: { [P in keyof Partial<T>]: TypedAbstractControl<T[P]> }, options?: { onlySelf?: boolean; emitEvent?: boolean; }): void;
}

export declare abstract class TypedFormArray<T> extends FormArray {
  readonly value: TypedControllerValue<T>[];
  controls: TypedController<T>[];
  reset(value: Parameters<TypedAbstractControl<T>['reset']>[0], options?: Parameters<FormControl['reset']>[1]): void;
  push(control: TypedAbstractControl<T>, options?: { emitEvent?: boolean; }): void;
  insert(index: number, control: TypedAbstractControl<T>, options?: { emitEvent?: boolean; }): void;
  setControl(index: number, control: TypedAbstractControl<T>, options?: { emitEvent?: boolean; }): void;
  setValue(value: Parameters<TypedAbstractControl<T>['setValue']>[0][], options?: Parameters<FormControl['setValue']>[1]): void
  patchValue(value: Parameters<TypedAbstractControl<T>['patchValue']>[0][], options?: Parameters<FormControl['patchValue']>[1]): void;
  getRawValue(): T[];
}

@Injectable()
export class NgxTypedFormBuilderService {
  constructor(public fb: FormBuilder) {
  }
  control<T>(formState: any, validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null): TypedFormControl<T> {
    return (<any>this.fb.control(formState, validatorOrOpts, asyncValidator)) as TypedFormControl<T>;
  }
  group<T>(controlsConfig: { [key in keyof T]: any; }, options?: AbstractControlOptions | { [key: string]: any; } | null): TypedFormGroup<T> {
    return (<any>this.fb.group(controlsConfig, options)) as TypedFormGroup<T>;
  }
  array(controlsConfig: any[], validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null): FormArray {
    return this.fb.array(controlsConfig, validatorOrOpts, asyncValidator)
  }
}
// let x: NgxTypedFormBuilderService

// const z = x.group<{ a: string, b: TypedFormArray<string>, bb: TypedFormArray<TypedFormArray<string>>, c: TypedFormGroup<{ cc1: TypedFormGroup<{ ccc1: TypedFormGroup<{ cccc1: string, cccc2: number }> }>, cc2: number }> }>({ a: [], b: [], c: [] })
// z.value
// z.controls.b.value
// z.controls.bb.value
// z.controls.c.value.cc1.ccc1.cccc1
// z.controls.c.value