// FIXME: We don't want to import any other packages here - creates circular dep
import { Label, NetworkID, Session, Stream } from '@vektor-finance/api'

import { SigningRequestCompleted, SigningRequests } from './signing'
import { TaskState } from './task'

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

export interface BroadcastedTransaction {
  id: string
  transaction_hash: string
  explorer_url: string
  network_id: NetworkID
}

export interface TransactionBroadcastedEvent {
  event_name: 'signing_request_completed'
  payload: BroadcastedTransaction
}

// Tasks

export interface TaskCompletedEvent {
  event_name: 'task_completed'
  payload: TaskState
}

// Streams

export interface StreamCreatedEvent {
  event_name: 'stream_created'
  payload: Pick<Stream, 'id' | 'created_at'>
}

export interface StreamUpdatedEvent {
  event_name: 'stream_updated'
  payload: Stream
}

export interface StreamDeletedEvent {
  event_name: 'stream_deleted'
  payload: Pick<Stream, 'id'>
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
  | StreamDeletedEvent

export type GatewayEventName = GatewayEvent['event_name']
