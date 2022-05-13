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

export interface FunctionData {
  function: string
  subfunction: string
  argument_counts: number[]
  args: (VDN | null)[]
  opts: Record<string, VDN | null>
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

export type VXLSubmitAPIError =
  | {
      type: 'runtime_error'
      data: Record<string, unknown>
    }
  | {
      type: 'compiler_undefined_function_error'
      data: {
        token_info: TokenInfo
        name: string
        argument_count: number
      }
    }
  | {
      type: 'compiler_incorrect_argument_count_error'
      data: {
        token_info: TokenInfo
      } & FunctionData
    }
  | {
      type: 'compiler_options_before_parameters_error'
      data: {
        token_info: TokenInfo
      }
    }
  | {
      type: 'compiler_undefined_symbol_error'
      data: {
        token_info: TokenInfo
      }
    }
  | {
      type: 'compiler_ambiguous_call_error'
      data: {
        token_info: TokenInfo
        function: string
        subfunction: string
      }
    }
  | {
      type: 'compiler_signature_mismatch_error'
      data: {
        token_info: TokenInfo
        function: string
        subfunction: string
        specs_and_mismatches: {
          mismatch: SignatureMismatch[]
          spec: SubfunctionSpec
        }[]
      }
    }
  | {
      type: 'parser_error'
      data: Record<string, unknown>
    }
  | {
      type: 'unknown_error'
      data: Record<string, unknown>
    }

export type VXLSubmitAPIErrorType = VXLSubmitAPIError['type']
