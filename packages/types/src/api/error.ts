import { SubfunctionSpec } from './subfunction'
import { VDN, VDNType } from './vdn'
import { VXLType } from './vxl'

// VXL Submission Errors

export interface TokenInfo {
  column: number
  line: number
  offset: number
  length: number | null
}

export interface CompilerBaseError {
  token_info: TokenInfo
}

export interface CompilerUndefinedFunctionError extends CompilerBaseError {
  name: string
  argument_count: number
}

export interface CompilerUndefinedSymbolError extends CompilerBaseError {
  symbol: string
}

export interface CompilerOptionsBeforeParametersError extends CompilerBaseError {
  option_name: string
}

export interface CompilerIncorrectArgumentCountError extends CompilerBaseError {
  function: string
  subfunction: string
  argument_counts: number[]
  args: (VDN | null)[]
  options: Record<string, VDN | null>
}

export interface IncorrectlyTyped {
  name: string
  value: VDN | null
  expected_type: VDNType
  provided_type: VDNType
  token_info: TokenInfo
}

export interface UnspecifiedOption {
  name: string
  token_info: TokenInfo
}

export interface SignatureMismatch {
  incorrectly_typed_args: IncorrectlyTyped[]
  incorrectly_typed_options: IncorrectlyTyped[]
  unspecified_options: UnspecifiedOption[]
}

export interface SpecAndMismatches {
  spec: SubfunctionSpec
  mismatches: SignatureMismatch
}

export interface SpecAndErrors {
  spec: SubfunctionSpec
  errors: Record<string, 'no_match' | 'conflicting_values'>
}

export interface CompilerSignatureMismatchError extends CompilerBaseError {
  function: string
  subfunction: string
  args: (VDN | null)[]
  options: Record<string, VDN | null>
  specs_and_mismatches: SpecAndMismatches[]
}

export interface CompilerAmbiguousCallError extends CompilerBaseError {
  function: string
  subfunction: string
}

export interface CompilerInvalidFieldError extends CompilerBaseError {
  path: string[]
  type: VXLType
}

export interface CompilerNotAStructError extends CompilerBaseError {
  path: string[]
  type: VXLType
}

export interface CompilerTypeVarResolutionError extends CompilerBaseError {
  function: string
  subfunction: string
  args: (VDN | null)[]
  options: Record<string, VDN | null>
  specs_and_errors: SpecAndErrors[]
}

export type CompilerIncompatibleSideEffectsError = CompilerBaseError

export type CompilerEmptyListLiteralError = CompilerBaseError

export interface CompilerNotSortableError extends CompilerBaseError {
  path: string[]
  type: VXLType
}

export type CompilerError =
  | {
      type: 'compiler_undefined_function_error'
      data: CompilerUndefinedFunctionError
    }
  | {
      type: 'compiler_undefined_symbol_error'
      data: CompilerUndefinedSymbolError
    }
  | {
      type: 'compiler_options_before_parameters_error'
      data: CompilerOptionsBeforeParametersError[]
    }
  | {
      type: 'compiler_incorrect_argument_count_error'
      data: CompilerIncorrectArgumentCountError
    }
  | {
      type: 'compiler_signature_mismatch_error'
      data: CompilerSignatureMismatchError
    }
  | {
      type: 'compiler_ambiguous_call_error'
      data: CompilerAmbiguousCallError
    }
  | {
      type: 'compiler_invalid_field_error'
      data: CompilerInvalidFieldError
    }
  | {
      type: 'compiler_not_a_struct_error'
      data: CompilerNotAStructError
    }
  | {
      type: 'compiler_incompatible_side_effects_error'
      data: CompilerIncompatibleSideEffectsError
    }
  | {
      type: 'compiler_type_var_resolution_error'
      data: CompilerTypeVarResolutionError
    }
  | {
      type: 'compiler_empty_list_literal_error'
      data: CompilerEmptyListLiteralError
    }
  | {
      type: 'compiler_not_sortable_error'
      data: CompilerNotSortableError
    }

// Runtime Errors

export interface RuntimeError {
  type: 'runtime_error'
  data: Record<string, unknown>
}

export interface RuntimeSignatureMismatchError {
  type: 'runtime_signature_mismatch_error'
  data: { function: string; subfunction: string } & SpecAndMismatches
}

export interface RuntimeInvalidFieldError {
  type: 'runtime_invalid_field_error'
  data: { value: VDN; path: string[] }
}

export interface RuntimeNotAListError {
  type: 'runtime_not_a_list_error'
  data: { value: VDN }
}

export interface EvalMemoryExceededError {
  type: 'eval_timeout_error'
  data: { eval_timeout: number }
}

export interface EvalTimeoutError {
  type: 'eval_memory_exceeded_error'
  data: never
}

export type AnyRuntimeError =
  | RuntimeError
  | RuntimeSignatureMismatchError
  | RuntimeInvalidFieldError
  | RuntimeNotAListError
  | EvalMemoryExceededError
  | EvalTimeoutError

export type VXLSubmitAPIError =
  | CompilerError
  | AnyRuntimeError
  | {
      type: 'parser_error' | 'unknown_error' | 'local_compiler_mixed_functions_error'
      data: Record<string, unknown>
    }

export type VXLSubmitAPIErrorType = VXLSubmitAPIError['type']
