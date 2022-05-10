import axios, { AxiosError } from 'axios'

// API Errors
export const isAPIError = (payload: any): payload is AxiosError<any> => axios.isAxiosError(payload)

// VXL Submission Errors

export interface TokenInfo {
  column: number
  line: number
  offset: number
}

export interface FunctionArg {
  type: string
  value: string
}

export interface FunctionData {
  function: string
  subfunction: string
  argument_counts: number[]
  args: (FunctionArg | null)[]
  opts: Record<string, FunctionArg>
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
      type: 'compiler_arg_types_dont_match_signatures_error'
      data: {
        token_info: TokenInfo
        function: string
        subfunction: string
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
