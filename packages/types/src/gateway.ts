import type { Alert, Label, LocalFunctionCall, NetworkID, Session, Stream, VXLHistoryEntry } from './api'
import type { SigningRequestCompleted, SigningRequests } from './signing'
import type { TaskState } from './task'

// Label

export interface LabelCreatedEvent {
  event_name: 'label_created'
  payload: Label
}

export interface LabelUpdatedEvent {
  event_name: 'label_updated'
  payload: Label
}

export interface LabelDeletedEvent {
  event_name: 'label_deleted'
  payload: Pick<Label, 'id'>
}

// Sessions

export interface SessionCreatedEvent {
  event_name: 'session_created'
  payload: Session
}

export interface SessionUpdatedEvent {
  event_name: 'session_updated'
  payload: Session
}

export interface SessionDeletedEvent {
  event_name: 'session_deleted'
  payload: Pick<Session, 'id'>
}

// Signing

export interface SigningRequestCreatedEvent {
  event_name: 'signing_request_created'
  payload: SigningRequests
}

export interface SigningRequestCompletedEvent {
  event_name: 'signing_request_completed'
  payload: SigningRequestCompleted
}

// Transaction

export interface TransactionBroadcasted {
  id: string
  transaction_hash: string
  explorer_url: string
  network_id: NetworkID
}

export interface TransactionBroadcastedEvent {
  event_name: 'transaction_broadcasted'
  payload: TransactionBroadcasted
}

// Tasks

export interface TaskCompletedEvent {
  event_name: 'task_completed'
  payload: TaskState
}

// Streams

export interface StreamCreatedEvent {
  event_name: 'stream_created'
  payload: Pick<Stream, 'id' | 'created_at' | 'updated_at' | 'vxl'>
}

export interface StreamUpdatedEvent {
  event_name: 'stream_updated'
  payload: Stream & NonNullable<Pick<Stream, 'last_value'>>
}

export interface StreamPausedEvent {
  event_name: 'stream_paused'
  payload: Pick<Stream, 'id'>
}

export interface StreamResumedEvent {
  event_name: 'stream_resumed'
  payload: Pick<Stream, 'id'>
}

export interface StreamDeletedEvent {
  event_name: 'stream_deleted'
  payload: Required<Pick<Stream, 'id' | 'reason'>> & Pick<Stream, 'error'>
}

// Alerts

export interface AlertCreatedEvent {
  event_name: 'alert_created'
  payload: Alert
}

export interface AlertUpdatedEvent {
  event_name: 'alert_created'
  payload: Alert
}

export interface AlertDeletedEvent {
  event_name: 'alert_created'
  payload: Pick<Alert, 'id'>
}

export interface AlertTriggeredEvent {
  event_name: 'alert_created'
  payload: Alert
}

export interface LocalFunctionCalledEvent {
  event_name: 'local_function_called'
  payload: LocalFunctionCall
}

export interface VXLHistoryEntryCreatedEvent {
  event_name: 'vxl_history_entry_created'
  payload: VXLHistoryEntry
}

export interface VXLHistoryEntryDeletedEvent {
  event_name: 'vxl_history_entry_deleted'
  payload: Pick<VXLHistoryEntry, 'id'>
}

export interface VXLHistoryDeletedEvent {
  event_name: 'vxl_history_deleted'
  payload: never // TODO
}

export type GatewayEvent =
  | LabelCreatedEvent
  | LabelUpdatedEvent
  | LabelDeletedEvent
  | SigningRequestCreatedEvent
  | SigningRequestCompletedEvent
  | TransactionBroadcastedEvent
  | TaskCompletedEvent
  | SessionCreatedEvent
  | SessionUpdatedEvent
  | SessionDeletedEvent
  | StreamCreatedEvent
  | StreamUpdatedEvent
  | StreamPausedEvent
  | StreamResumedEvent
  | StreamDeletedEvent
  | AlertCreatedEvent
  | AlertUpdatedEvent
  | AlertDeletedEvent
  | AlertTriggeredEvent
  | LocalFunctionCalledEvent
  | VXLHistoryEntryCreatedEvent
  | VXLHistoryEntryDeletedEvent
  | VXLHistoryDeletedEvent

export type GatewayEventName = GatewayEvent['event_name']
