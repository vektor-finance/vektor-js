import axios, { AxiosError } from 'axios'

import { SubfunctionSpec, VDN, VDNType } from './models'

// API Errors
export const isAPIError = (payload: any): payload is AxiosError<any> => axios.isAxiosError(payload)

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
}

export interface CompilerNotAStructError extends CompilerBaseError {
  path: string[]
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

export type VXLSubmitAPIError =
  | {
      type: 'runtime_error' | 'parser_error' | 'unknown_error' | 'local_compiler_mixed_functions_error'
      data: Record<string, unknown>
    }
  | CompilerError

export type VXLSubmitAPIErrorType = VXLSubmitAPIError['type']
