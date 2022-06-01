import axios, { AxiosError } from 'axios'

import { SubfunctionSpec, VDN, VDNType } from './models'

// API Errors
export const isAPIError = (payload: any): payload is AxiosError<any> => axios.isAxiosError(payload)

// VXL Submission Errors

export interface TokenInfo {
  column: number
  line: number
  offset: number
}

export interface CompilerBaseError {
  token_info: TokenInfo
}

export interface CompilerUndefinedSymbolError extends CompilerBaseError {
  symbol: string
}

export interface CompilerUndefinedFunctionError {
  token_info: TokenInfo
  name: string
  argument_count: number
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
}

export interface SignatureMismatch {
  incorrectly_typed_args: IncorrectlyTyped[]
  incorrectly_typed_options: IncorrectlyTyped[]
  unspecified_options: string[]
}

export interface CompilerSignatureMismatchError extends CompilerBaseError {
  function: string
  subfunction: string
  specs_and_mismatches: {
    mismatch: SignatureMismatch[]
    spec: SubfunctionSpec
  }[]
}

export interface CompilerAmbiguousCallError extends CompilerBaseError {
  function: string
  subfunction: string
}


export type CompilerError =
  | {
      type: 'compiler_options_before_parameters_error'
      data: CompilerBaseError
    }
  | {
      type: 'compiler_undefined_symbol_error'
      data: CompilerUndefinedSymbolError
    }
  | {
      type: 'compiler_undefined_function_error'
      data: CompilerUndefinedFunctionError
    }
  | {
      type: 'compiler_incorrect_argument_count_error'
      data: CompilerIncorrectArgumentCountError
    }
  | {
      type: 'compiler_ambiguous_call_error'
      data: CompilerAmbiguousCallError
    }
  | {
      type: 'compiler_signature_mismatch_error'
      data: CompilerSignatureMismatchError
    }

export type VXLSubmitAPIError =
  | {
      type: 'runtime_error' | 'parser_error' | 'unknown_error' | 'local_compiler_mixed_functions_error'
      data: Record<string, unknown>
    }
  | CompilerError

export type VXLSubmitAPIErrorType = VXLSubmitAPIError['type']
