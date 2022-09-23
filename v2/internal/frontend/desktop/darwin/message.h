//
//  message.h
//  test
//
//  Created by Lea Anthony on 14/10/21.
//

#ifndef export_h
#define export_h


#ifdef __cplusplus
extern "C"
{
#endif

void processMessage(const char *);
void processURLRequest(void*, unsigned long long, const char *, const char *, const char *, const void *, int);
void processMessageDialogResponse(int);
void processOpenFileDialogResponse(const char*);
void processSaveFileDialogResponse(const char*);
void processCallback(int);
void processNotification(int);
void objectCreated(int, void*);

#ifdef __cplusplus
}
#endif


#endif /* export_h */
