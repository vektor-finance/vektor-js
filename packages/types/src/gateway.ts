import type {
  Alert,
  Label,
  LocalFunctionCall,
  NetworkID,
  Pane,
  Session,
  Stream,
  UserSettings,
  VXLHistoryEntry,
  Workspace,
} from './api'
import type { SigningRequestCompleted, SigningRequests } from './signing'
import type { TaskState } from './task'

type GatewayBaseEvent<EventName extends Lowercase<string>, Payload> = {
  event_name: EventName
  payload: Payload
}

// Label
export type LabelCreatedEvent = GatewayBaseEvent<'label_created', Label>
export type LabelUpdatedEvent = GatewayBaseEvent<'label_updated', Label>
export type LabelDeletedEvent = GatewayBaseEvent<'label_deleted', Pick<Label, 'id'>>

// Sessions
export type SessionCreatedEvent = GatewayBaseEvent<'session_created', Session>
export type SessionUpdatedEvent = GatewayBaseEvent<'session_updated', Session>
export type SessionDeletedEvent = GatewayBaseEvent<'session_deleted', Pick<Session, 'id'>>

// Signing
export type SigningRequestCreatedEvent = GatewayBaseEvent<'signing_request_created', SigningRequests>
export type SigningRequestCompletedEvent = GatewayBaseEvent<'signing_request_completed', SigningRequestCompleted>

// Transaction
export interface TransactionBroadcasted {
  id: string
  transaction_hash: string
  explorer_url: string
  network_id: NetworkID
}
export type TransactionBroadcastedEvent = GatewayBaseEvent<'transaction_broadcasted', TransactionBroadcasted>

// Tasks
export type TaskCompletedEvent = GatewayBaseEvent<'task_completed', TaskState>

// Streams
export type StreamCreatedEvent = GatewayBaseEvent<
  'stream_created',
  Pick<Stream, 'id' | 'created_at' | 'updated_at' | 'vxl'>
>
export type StreamUpdatedEvent = GatewayBaseEvent<'stream_updated', Stream & NonNullable<Pick<Stream, 'last_value'>>>
export type StreamPausedEvent = GatewayBaseEvent<'stream_paused', Pick<Stream, 'id'>>
export type StreamResumedEvent = GatewayBaseEvent<'stream_resumed', Pick<Stream, 'id'>>
export type StreamDeletedEvent = GatewayBaseEvent<
  'stream_deleted',
  Required<Pick<Stream, 'id' | 'reason'>> & Pick<Stream, 'error'>
>

// Alerts
export type AlertCreatedEvent = GatewayBaseEvent<'alert_created', Alert>
export type AlertUpdatedEvent = GatewayBaseEvent<'alert_created', Alert>
export type AlertDeletedEvent = GatewayBaseEvent<'alert_created', Pick<Alert, 'id'>>
export type AlertTriggeredEvent = GatewayBaseEvent<'alert_created', Alert>
export type LocalFunctionCalledEvent = GatewayBaseEvent<'local_function_called', LocalFunctionCall>

// History
export type VXLHistoryEntryCreatedEvent = GatewayBaseEvent<'vxl_history_entry_created', VXLHistoryEntry>
export type VXLHistoryEntryDeletedEvent = GatewayBaseEvent<'vxl_history_entry_deleted', Pick<VXLHistoryEntry, 'id'>>
export type VXLHistoryDeletedEvent = GatewayBaseEvent<'vxl_history_deleted', undefined>

// User Settings
export type UserSettingsUpdatedEvent = GatewayBaseEvent<'user_settings_updated', UserSettings>

// Workspaces
export type WorkspaceCreatedEvent = GatewayBaseEvent<'workspace_created', Workspace>
export type WorkspaceOpenedEvent = GatewayBaseEvent<'workspace_opened', Workspace>
export type WorkspaceUpdatedEvent = GatewayBaseEvent<'workspace_updated', Workspace>
export type WorkspaceDeletedEvent = GatewayBaseEvent<'workspace_deleted', Pick<Workspace, 'id'>>

// Panes
export type PaneCreatedEvent = GatewayBaseEvent<'pane_created', Pane>
export type PaneUpdatedEvent = GatewayBaseEvent<'pane_updated', Pane>
export type PaneIndexesUpdatedEvent = GatewayBaseEvent<'pane_indexes_updated', { id: string; index: number }[]>
export type PaneDeletedEvent = GatewayBaseEvent<'pane_deleted', Pick<Pane, 'id'>>

export type GatewayEvent =
  | LabelCreatedEvent
  | AlertCreatedEvent
  | AlertDeletedEvent
  | AlertTriggeredEvent
  | AlertUpdatedEvent
  | LabelDeletedEvent
  | LabelUpdatedEvent
  | LocalFunctionCalledEvent
  | SessionCreatedEvent
  | SessionDeletedEvent
  | SessionUpdatedEvent
  | SigningRequestCompletedEvent
  | SigningRequestCreatedEvent
  | StreamCreatedEvent
  | StreamDeletedEvent
  | StreamPausedEvent
  | StreamResumedEvent
  | StreamUpdatedEvent
  | TaskCompletedEvent
  | TransactionBroadcastedEvent
  | UserSettingsUpdatedEvent
  | VXLHistoryDeletedEvent
  | VXLHistoryEntryCreatedEvent
  | VXLHistoryEntryDeletedEvent
  | WorkspaceCreatedEvent
  | WorkspaceOpenedEvent
  | WorkspaceUpdatedEvent
  | WorkspaceDeletedEvent
  | PaneCreatedEvent
  | PaneUpdatedEvent
  | PaneIndexesUpdatedEvent
  | PaneDeletedEvent

export type GatewayEventName = GatewayEvent['event_name']
